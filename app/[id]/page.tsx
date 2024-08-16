"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import html2canvas from "html2canvas";
import { notFound, useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { Skeleton } from "@nextui-org/skeleton";
import QRCode from "react-qr-code";
import { parseCookies } from "nookies";

import { getUser } from "@/components/ViewAccessModal";

export default function ViewAccessModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const inviteRef = useRef<HTMLDivElement | null>(null);

  function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const downloadCard = (name: string) => {
    html2canvas(inviteRef.current as HTMLElement, {
      allowTaint: false,
      useCORS: true,
      scale: 4,
    }).then((canvas) => {
      const myImage = canvas.toDataURL("image/png");

      downloadURI(myImage, `${name} #OAsisOfLove24 - Access Card.png`);
    });
  };

  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { user } = await getUser(id);

        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  const cookies = parseCookies();

  if (!cookies["scan-access"]) {
    return notFound();
  }

  return (
    <div>
      <div className="z-50 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0" />

      <div className="flex w-screen flex-col h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center [--scale-enter:100%] [--scale-exit:100%] [--slide-enter:0px] [--slide-exit:80px] sm:[--scale-enter:100%] sm:[--scale-exit:103%] sm:[--slide-enter:0px] sm:[--slide-exit:0px] items-end sm:items-center">
        <Button
          className="px-0 gap-0 z-50 min-w-9 h-9 rounded-full text-foreground-500 data-[hover=true]:bg-default/40 bg-default/60"
          color="default"
          variant="light"
          onPress={() => {
            router.push(`/`);
          }}
        >
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="1em"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </Button>
        <div className="shadow-small">
          <div
            ref={inviteRef}
            className=" flex flex-col relative z-50 w-full box-border bg-content1 outline-none mx-1 my-1 sm:mx-6 sm:my-6 max-w-md rounded-large  overflow-y-hidden"
          >
            <div>
              <div className="py-4 px-6 flex-initial text-large font-semibold flex flex-col gap-1">
                Access Card
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 py-2">
                <section className="flex flex-col gap-y-3">
                  <div className="-mt-5">
                    <Image alt="logo" height={90} src="/logo.svg" width={120} />
                  </div>
                  <div className="flex -mt-8 flex-col py-4 gap-y-2">
                    <p className="text-4xl font-bold leading-none">
                      Olubunmi & Ayokunle
                    </p>
                    <small className="leading-none">
                      #OAsisOfLove &apos;24
                    </small>
                  </div>
                  <div className="flex justify-between space-x-4">
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">Time</p>
                      <p className="text-base font-bold">1:00 PM</p>
                    </div>
                  </div>
                  <Divider className="" />
                  <div className="flex justify-between space-x-4">
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">Guest Name</p>
                      {loading ? (
                        <div className="mt-1">
                          <Skeleton className="h-3.5 w-full rounded-lg" />
                        </div>
                      ) : (
                        <p className="text-base font-bold">{user?.name}</p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">Table Number</p>
                      {loading ? (
                        <div className="mt-1">
                          <Skeleton className="h-3.5 w-full rounded-lg" />
                        </div>
                      ) : (
                        <p className="text-base font-bold">
                          {user?.tableNumber}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center py-2 max-w-[13rem] my-4 px-2 rounded-md bg-white mx-auto">
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={`${process.env.NEXT_PUBLIC_URL}/${id}/access`}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                  </div>
                  <small className="text-center pb-4">
                    This access card admits one
                  </small>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="px-0 gap-0 z-50 min-w-9 h-9 rounded-full text-foreground-500 data-[hover=true]:bg-default/40 bg-default/60"
          color="default"
          variant="light"
          onPress={() => downloadCard(user?.name ?? "Adenugba Favour")}
        >
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.44 8.90002C20.04 9.21002 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24002 7.46998 8.91002"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
            <path
              d="M12 15V3.62"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
            <path
              d="M15.35 5.85L12 2.5L8.65002 5.85"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

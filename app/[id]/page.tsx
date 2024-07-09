"use client";
import React, { useRef } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

export default function ViewAccessModal() {
  const router = useRouter();

  const inviteRef = useRef<HTMLDivElement | null>(null);

  function downloadURI(uri: string, name: string) {
    var link = document.createElement("a");

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
      var myImage = canvas.toDataURL("image/png");

      downloadURI(myImage, `${name} #OAsisOfLove24 - Access Card.png`);
    });
  };

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
              <>
                <div className="py-4 px-6 flex-initial text-large font-semibold flex flex-col gap-1">
                  Access Card
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-2">
                  <section className="flex flex-col gap-y-3">
                    <div className="mt-1.5">
                      <svg
                        fill="none"
                        viewBox="0 0 394 80"
                        width={80}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
                          fill="#fff"
                        />
                        <path
                          d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col py-4 gap-y-2">
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
                        <p className="text-base font-bold">John Doe</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium text-sm">Table Number</p>
                        <p className="text-base font-bold">54</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center py-2">
                        <Image
                          alt="qr-code"
                          height={200}
                          src="/qr.svg"
                          width={200}
                        />
                      </div>
                    </div>
                    <small className="text-center pb-4">
                      This access card admits one
                    </small>
                  </section>
                </div>
              </>
            </div>
          </div>
        </div>
        <Button
          className="px-0 gap-0 z-50 min-w-9 h-9 rounded-full text-foreground-500 data-[hover=true]:bg-default/40 bg-default/60"
          color="default"
          variant="light"
          onPress={() => downloadCard("Adenugba Favour")}
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

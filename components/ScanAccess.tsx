"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ScanAccess = ({ scanAccess }: { scanAccess: boolean }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      setLoading(true);
      await wait(1500);
      setCookie(null, "scan-access", "84566acf-73af-4fad-b38d-929d412d2f55", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="primary"
      disabled={scanAccess}
      isLoading={loading}
      variant="shadow"
      onClick={handleClick}
    >
      {scanAccess ? "Access Granted" : "Grant Scan Access"}
    </Button>
  );
};

export default ScanAccess;

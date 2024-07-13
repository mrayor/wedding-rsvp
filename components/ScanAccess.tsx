"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { parseCookies, setCookie } from "nookies";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ScanAccess = () => {
  const [loading, setLoading] = useState(false);
  const cookies = parseCookies();

  const handleClick = async () => {
    try {
      setLoading(true);
      await wait(1500);
      setCookie(null, "scan-access", "84566acf-73af-4fad-b38d-929d412d2f55", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="primary"
      disabled={!!cookies["scan-access"]}
      isLoading={loading}
      variant="shadow"
      onClick={handleClick}
    >
      {cookies["scan-access"] ? "Access Granted" : "Grant Scan Access"}
    </Button>
  );
};

export default ScanAccess;

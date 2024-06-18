"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";

import useLocalStorage from "./useLocalStorage";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ScanAccess = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useLocalStorage("scan-access", "");

  const handleClick = async () => {
    try {
      setLoading(true);
      await wait(1500);
      setValue("#oasisoflove24");
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="primary"
      disabled={!!value}
      isLoading={loading}
      variant="shadow"
      onClick={handleClick}
    >
      {value ? "Access Granted" : "Grant Scan Access"}
    </Button>
  );
};

export default ScanAccess;

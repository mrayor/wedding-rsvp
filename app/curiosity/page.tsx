import React from "react";
import { cookies } from "next/headers";

import ScanAccess from "@/components/ScanAccess";

const page = () => {
  const scanAccess = cookies().get("scan-access");

  return (
    <div className="flex items-center justify-center h-full">
      <ScanAccess scanAccess={!!scanAccess} />
    </div>
  );
};

export default page;

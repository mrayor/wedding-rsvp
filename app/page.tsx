import React from "react";

import Home from "../components/Home";

import ScanAccess from "@/components/ScanAccess";

export const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
      method: "GET",
    });

    return await res.json();
  } catch (error) {
    console.log(error);

    return error;
  }
};

export default async function index() {
  const { users } = await getUsers();

  return (
    <>
      <div className="container max-w-7xl mx-auto flex items-center justify-end pb-10 space-x-4">
        <ScanAccess />
      </div>
      <Home users={users} />
    </>
  );
}

'use client'
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div>Login...</div>
      <button onClick={() => router.push("/")}>Navigate to Home</button>
    </>
  );
};

export default page;

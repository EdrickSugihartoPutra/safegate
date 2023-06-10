"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
    const router = useRouter();
useEffect(()=>{
    router.push('/dashboard')
},[])
  return (
    <>
      <h1>RELOADING....</h1>
    </>
  );
}

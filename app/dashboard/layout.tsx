import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col w-full px-0 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}

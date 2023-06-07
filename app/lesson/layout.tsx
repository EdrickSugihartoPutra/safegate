import React from "react";
import Navbar from "../components/navbar";
import { lessonsIdx } from "./lessonsData";
import Image from "next/image";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col w-full mt-24 mb-10 px-0">
        {children}
      </div>
    </>
  );
}
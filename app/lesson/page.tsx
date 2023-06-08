import React from "react";
import { lessonsIdx } from "./lessonsData";
import Image from "next/image";
import Link from "next/link";

export default function Lesson() {
  return (
    <>
      {lessonsIdx.map((subject, idx) => (
        <div
          key={idx}
          className="container bg-transparent shadow-lg px-2 shadow-dark rounded-lg"
        >
          <div className="flex flex-col mt-4 sm:flex-row">
            <div className="flex bg-primary w-full justify-center items-center rounded-tl-lg rounded-tr-lg sm:w-1/3 sm:py-4 sm:rounded-tr-none sm:rounded-bl-lg">
              <div className="flex flex-col items-center justify-center h-full scale-75 sm:scale-100">
                <Image src={subject.pic} alt="testImage" className="w-20" />
                <h4 className="text-light text-xl mt-2 text-center">
                  {subject.name}
                </h4>
              </div>
            </div>
            <div className="flex flex-col w-full bg-light shadow-lg rounded-bl-lg rounded-br-lg sm:rounded-bl-none sm:rounded-tr-lg">
              <div className="flex w-full h-full py-4 items-center justify-center">
                <p className="text-lg font-semibold text-center">
                  Pelajari mengenai {subject.name}
                </p>
              </div>
              <div className="flex w-full h-full justify-center items-center py-4">
                <Link
                  href={`/lesson/${subject.id}`}
                  className="bg-dark rounded text-white px-4 py-2 transition duration-150 hover:bg-gold hover:text-dark hover:font-semibold"
                >
                  Pelajari
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

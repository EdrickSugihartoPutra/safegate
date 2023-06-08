import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lessons } from "./lessonJson";

export default function page({ params }: { params: { slug: string } }) {
  const pageId = parseInt(params.slug);
  const lesson = lessons.find((element => element.id == pageId))!;
  const quizlink = `/lesson/${pageId}/quiz/${pageId}`
  return (
    <>
      <div className="container flex self-center text-light bg-primary justify-center w-[95%] px-0 sm:mx-1 mb-4 rounded-lg shadow-lg shadow-dark">
        {/* left content */}
        <div className=" hidden sm:flex w-1/4">
          <div className="flex w-full mb-8 px-3 py-4 overflow-y-auto justify-start items-start lg:justify-center">
            <div className="flex items-start w-full sm:justify-center">
              <Image
                src={lesson.pic}
                alt="placeholder"
                className="w-[100px] md:w-[170px]"
              />
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="hidden bg-light w-[1px] my-6 md:block"></div>
        {/* right content */}
        <div className="flex w-full sm:ml-4 sm:w-3/4 h-full text-justify">
          <div className="flex flex-col items-start sm:px-2 py-4">
            <h3 className="text-xl md:text-3xl font-semibold mb-4 self-center">
              {lesson.name}
            </h3>
            <div className="bg-light text-dark px-2">
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 mb-4">
                Definisi
              </h4>
              <p className="text-sm md:text-md lg:text-lg p-1">
                {lesson.definisi}
              </p>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Modus
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.modus?.map((item, idx) => (
                  <li className="my-2" key={idx}>{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Tipe
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.tipe?.map((item, idx) => (
                  <li className="my-2" key={idx}>{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Dampak
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.dampak?.map((item, idx) => (
                  <li className="my-2" key={idx}>{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Motif
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.motif?.map((item, idx) => (
                  <li className="my-2" key={idx}>{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Pencegahan
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.prevensi?.map((item, idx) => (
                  <li className="my-2" key={idx}>{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Penutup
              </h4>
              <p className="text-sm md:text-md lg:text-lg p-1 mb-4">
                {lesson.penutup}
              </p>
            </div>
            <Link
              href={quizlink}
              className="flex justify-center text-md w-1/3 mt-4 mx-8 py-4 text-white font-medium self-center rounded-lg border border-transparent bg-dark transition duration-150 hover:bg-darker hover:border-dark "
            >
              Mulai Kuis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

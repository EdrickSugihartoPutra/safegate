"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lessons } from "./lessonJson";
import { useEffect } from "react";
import { setLatestLesson } from "@/app/firebaseConfig";
import { FaFire, FaUserShield } from "react-icons/fa";
import { GiSpy } from "react-icons/gi";
import { BiShow, BiSitemap } from "react-icons/bi";
import { BsQuestionDiamondFill } from "react-icons/bs";

export default function page({ params }: { params: { slug: string } }) {
  const pageId = parseInt(params.slug);
  const lesson = lessons.find((element) => element.id == pageId)!;
  const quizlink = `/lesson/${pageId}/quiz/${pageId}`;
  useEffect(() => {
    setLatestLesson(pageId);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get element by id and use scrollView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    console.log("masuk");
  };
  return (
    <>
      <div className="container flex self-center text-light bg-primary justify-center w-[95%] px-0 sm:mx-1 mb-4 rounded-lg shadow-lg shadow-dark">
        {/* left content */}
        <div className="hidden sm:flex w-1/4">
          <div className="container">
            <div className="flex flex-col items-center bg-light bg-opacity-80 rounded-lg text-dark mt-4">
              <h3 className="text-lg font font-semibold mt-4">Index Materi</h3>
              <div className="flex w-full px-3 py-4 overflow-y-auto justify-start items-start lg:justify-center">
                <div className="flex items-start w-fit p-8 sm:justify-center rounded-full bg-dark bg-opacity-80">
                  <Image src={lesson.pic} alt="placeholder" className="w-fit" />
                </div>
              </div>
              <div className="flex">
                <ul className="my-4">
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <GiSpy />
                      <Link href="#definition" onClick={handleScroll}>
                        Definisi
                      </Link>
                    </div>
                  </li>
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <BiShow />
                      <Link href="#modus" onClick={handleScroll}>
                        Modus
                      </Link>
                    </div>
                  </li>
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <FaFire />
                      <Link href="#impact" onClick={handleScroll}>
                        Dampak
                      </Link>
                    </div>
                  </li>
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <BsQuestionDiamondFill />
                      <Link href="#motives" onClick={handleScroll}>
                        Motif
                      </Link>
                    </div>
                  </li>
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <FaUserShield />
                      <Link href="#avoidance" onClick={handleScroll}>
                        Pencegahan
                      </Link>
                    </div>
                  </li>
                  <li className="my-2 font-semibold transition hover:text-gold">
                    <div className="flex items-center justify-start gap-2">
                      <BiSitemap />
                      <Link href="#type" onClick={handleScroll}>
                        Penutup
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="hidden bg-light w-[1px] my-6 md:block"></div>
        {/* right content */}
        <div className="flex w-full sm:ml-4 sm:w-3/4 h-full text-justify rounded-lg">
          <div className="flex flex-col items-start sm:px-2 py-4">
            <div className="flex flex-col justify-center bg-transparent text-dark px-4 rounded-lg">
              <div className="flex flex-row-reverse w-fit pr-3 md:pr-0 mb-4 self-center justify-center items-center bg-dark text-light rounded-full mt-4">
                <h3 className="text-xl md:text-3xl font-semibold md:px-4 md:py-2 self-center">
                  {lesson.name}
                </h3>
                <div className="flex w-fit p-2 sm:justify-center rounded-full bg-light shadow-md shadow-dark scale-75 md:hidden">
                  <Image
                    src={lesson.pic}
                    alt="placeholder"
                    className="w-fit scale-75"
                  />
                </div>
              </div>
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <GiSpy size={40} />
                  <h4
                    id="definition"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4"
                  >
                    Definisi
                  </h4>
                </div>
                <p className="text-sm md:text-md lg:text-lg text-darker md:p-2">
                  {lesson.definisi}
                </p>
              </div>
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <BiShow size={40} />
                  <h4
                    id="modus"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4"
                  >
                    Modus
                  </h4>
                </div>
                <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4 md:p-2">
                  {lesson.modus?.map((item, idx) => (
                    <li className="my-2" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Label */}
              {/* <h4
                id="type"
                className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4"
              >
                Tipe
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.tipe?.map((item, idx) => (
                  <li className="my-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul> */}
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <FaFire size={40} />
                  <h4
                    id="impact"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4"
                  >
                    Dampak
                  </h4>
                </div>
                <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4 md:p-2">
                  {lesson.dampak?.map((item, idx) => (
                    <li className="my-2" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <BsQuestionDiamondFill size={40} />
                  <h4
                    id="motives"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4"
                  >
                    Motif
                  </h4>
                </div>
                <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4 md:p-2">
                  {lesson.motif?.map((item, idx) => (
                    <li className="my-2" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <FaUserShield size={40} />
                  <h4
                    id="avoidance"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4"
                  >
                    Pencegahan
                  </h4>
                </div>
                <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4 md:p-2">
                  {lesson.prevensi?.map((item, idx) => (
                    <li className="my-2" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Label */}
              <div className="container bg-light opacity-90 rounded-lg mt-4">
                <div className="flex items-center justify-start gap-2">
                  <BiSitemap size={40} />
                  <h4
                    id="closing"
                    className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4"
                  >
                    Penutup
                  </h4>
                </div>
                <p className="text-sm md:text-md lg:text-lg mb-4 md:p-2">
                  {lesson.penutup}
                </p>
              </div>
            </div>
            <Link
              href={quizlink}
              className="flex justify-center text-md w-1/3 mt-4 mx-8 py-4 text-white font-medium self-center text-center rounded-lg border border-transparent bg-dark transition duration-150 hover:bg-darker hover:border-dark "
            >
              Mulai Kuis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

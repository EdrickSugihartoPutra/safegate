import React from "react";
import ransom from "../../../public/icons/ransomware.png";
import Image from "next/image";
import Link from "next/link";

export default function SpoofLesson() {
  const lesson = {
    id: 3,
    name: "Ransomeware",
    pic: ransom,
    materi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, minima magnam repellat sed nesciunt minus pariatur dolore non tempora id, aspernatur deserunt facilis dicta illo quae dolorum maiores consectetur veniam iste! Ipsum sequi, voluptas, unde corporis, incidunt odio quasi cupiditate quisquam animi adipisci fugiat! Magni excepturi, dolore perferendis reiciendis laudantium, illum placeat accusamus maiores eius optio voluptates quasi laboriosam itaque architecto officiis animi autem assumenda quidem incidunt. Corporis provident nulla ut nihil rem, architecto quasi id quod laborum enim optio possimus reprehenderit voluptate excepturi eaque vitae voluptas labore iusto, ipsam aliquam incidunt fugit officia corrupti vel! Nesciunt commodi cumque nulla.`,
    materiLanjut:
      "Selanjutnya adalah cracking, cracking merupakan istilah yang masih berkaitan erat dengan istilah hacking. Sama halnya dengan aktivitas hacking, cracking merupakan aktivitas ilegal yang dilakukan oleh pihak",
    avoidance: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 1",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 2",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 3",
    ],
    link: "/lesson/ransom/quiz",
  };

  return (
    <>
      <div className="container flex self-center text-light bg-primary justify-center w-[95%] mx-1 mb-4  rounded-lg shadow-lg shadow-dark">
        {/* left content */}
        <div className=" hidden sm:flex w-1/4">
          <div className="flex w-full mb-8 px-3 py-4 overflow-y-auto justify-start items-start lg:items-center lg:justify-center">
            <div className="flex items-start w-full lg:justify-center">
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
        <div className="flex w-full ml-4 sm:w-3/4 h-full">
          <div className="flex flex-col items-start px-2 py-4">
            <h3 className="text-3xl font-semibold mb-4">{lesson.name}</h3>
            <div className="">
              <p className="text-sm md:text-md lg:text-lg">{lesson.materi}</p>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.avoidance?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <p className="text-sm md:text-md lg:text-lg">
                {lesson.materiLanjut}
              </p>
            </div>
            <Link
              href={lesson.link}
              className="flex justify-center text-md w-1/3 mt-4 mx-8 py-2 text-white font-medium self-center rounded-lg border border-transparent bg-dark transition duration-150 hover:bg-darker hover:border-dark "
            >
              Mulai Kuis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

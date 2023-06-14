import React from "react";
import Agent from "../../public/icons/spy.png";
import Image from "next/image";

export default function IntroLesson() {
  return (
    <section className="sm: mt-4">
      <div className="container flex justify-center">
        <div className="flex flex-wrap w-full sm:w-4/5 self-center justify-center gap-4 bg-transparent sm:px-4 rounded-lg sm:flex-nowrap">
          <div className="bg-white-500 flex items-center justify-center my-2">
            <Image
              src={Agent}
              alt="agentId"
              className="rounded-full bg-darker w-20 sm:w-32 sm:scale-105 shadow-md shadow-darker"
            />
          </div>
          <div className="flex flex-col bg-light w-fit p-4 rounded-xl sm:rounded-bl-none h-4/5 shadow-md shadow-darker text-sm text-justify">
            <span className="block w-full font-bold mb-1">Agent S</span>
            <p>
              Ini adalah gudang persenjataan yang kita miliki, informasi
              mengenai kejahatan digital! Pelajari informasi-informasi ini agar
              kita dapat terhindar dan menghindarkan orang lain dari kejahatan
              digital disekitar kita!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

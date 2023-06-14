import React from "react";
import Agent from "../../public/icons/spy.png";
import Image from "next/image";

export default function IntroCard() {
  return (
    <section className="sm: mt-4">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4 bg-transparent sm:py-6 sm:p-4 rounded-lg sm:flex-nowrap">
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
              Selamat datang agent, kamu telah terpilih sebagai orang yang akan
              membantu masyarakat untuk lebih sadar akan kejahatan digital.
              Perbekali dirimu dengan informasi kejahatan yang ada dan
              sebarkanlah informasi tersebut. Tidak semua pahlawan mengenakan
              jubah, terkadang hanya dengan <i>sharing</i> info saja sudah
              cukup...OK!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

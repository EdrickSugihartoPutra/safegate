import React from "react";
import Agent from "../../../../public/icons/spy.png";
import Image from "next/image";

export default function OutroQuiz() {
  return (
    <section className="sm: mt-4">
      <div className="container flex justify-center">
        <div className="flex flex-wrap w-full self-center justify-center gap-4 bg-transparent sm:px-4 rounded-lg sm:flex-nowrap">
          <div className="bg-white-500 flex items-center justify-center my-2">
            <Image
              src={Agent}
              alt="agentId"
              className="rounded-full bg-darker w-20 sm:w-32 sm:scale-105 shadow-md shadow-darker"
            />
          </div>
          <div className="flex flex-col bg-light w-fit p-4 rounded-xl sm:rounded-bl-none shadow-md shadow-darker text-sm text-justify">
            <span className="block w-full font-bold mb-1 text-dark">
              Agent S
            </span>
            <p className="text-dark">
              Apakah hasilnya sudah memuaskan? Tidak perlu terburu-buru, kamu
              bisa mengakses pelajaran ini kapanpun kamu mau. Jangan lupa
              sebarkan informasi ini pada orang disekitarmu agar mereka terindar
              dari kejahatan digital!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

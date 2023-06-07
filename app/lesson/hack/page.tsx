import React from "react";
import hacking from "../../../public/icons/hacker.png";
import Image from "next/image";
import Link from "next/link";

export default function HackLesson() {
  const lesson = {
    id: 1,
    name: "Cracking dan Hacking",
    pic: hacking,
    definisi:
      "Hacking adalah tindakan mengidentifikasi dan kemudian memanfaatkan kelemahan dalam sistem komputer atau jaringan, biasanya untuk mendapatkan akses yang tidak sah ke data pribadi atau organisasi. Hacking tidak selalu merupakan aktivitas jahat, tetapi istilah ini umumnya memiliki konotasi negatif karena hubungannya dengan kejahatan dunia maya.",
    penutup:
      "Untuk melindungi diri Anda dari hacking, penting untuk mengambil langkah-langkah keamanan yang tepat.Selalu jaga kehati-hatian dan waspada terhadap aktivitas online Anda, serta tingkatkan kesadaran akan ancaman keamanan.",
    modus: [
      "Social Engineering : Social engineering adalah teknik manipulasi yang dirancang untuk memanfaatkan kesalahan manusia guna mendapatkan akses ke informasi pribad",
      "Eksploitasi Wi-Fi : Tidak semua orang mengamankan router mereka, dan hal ini dapat dieksploitasi oleh peretas yang berkeliaran mencari koneksi nirkabel terbuka dan tidak aman.",
      "Menggunakan Malware : Hacker dapat menyusup ke perangkat pengguna menggunakan malware. Biasanya mereka akan menargetkan calon korban melalui email, pesan singkat, atau web yang telah disisipi malware",
    ],
    motif: [
      "Uang : Motivasi terbesar seringkali adalah keuntungan finansial. Para peretas dapat menghasilkan uang dengan mencuri kata sandi Anda, mengakses rincian bank atau kartu kredit Anda.",
      "Spionase Korporasi : Spionase korporat adalah bentuk hacking yang dirancang untuk mengakses data terklasifikasi atau kekayaan intelektual guna memperoleh keunggulan kompetitif atas pesaing korporat.",
      "Balas Dendam : Terkadang, peretas memiliki motivasi berupa kemarahan - keinginan untuk membalas dendam kepada individu atau organisasi yang mereka anggap telah melakukan kesalahan terhadap mereka dengan cara tertentu.",
    ],
    dampak: [
      "Menjual informasi Anda kepada pihak lain yang akan menggunakannya untuk tujuan jahat",
      "Menghapus atau merusak file penting di komputer Anda",
      "Mendapatkan informasi pribadi yang sensitif dan membagikannya, atau mengancam untuk membagikannya, secara publik",
    ],
    prevensi: [
      "Gunakan password yang kuat",
      "Selalu update perangkat yang anda miliki",
      "Hindari website-website yang mencurigakan",
      "Jangan sembarangan menggunakan jaringan internet publik",
      "Gunakan Antivirus yang baik",
    ],
    link: "/lesson/hack/quiz",
  };

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
                  <li className="my-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Dampak
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.dampak?.map((item, idx) => (
                  <li className="my-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Motif
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.motif?.map((item, idx) => (
                  <li className="my-2" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Pencegahan
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.prevensi?.map((item, idx) => (
                  <li className="my-2" key={idx}>
                    {item}
                  </li>
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
              href={lesson.link}
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

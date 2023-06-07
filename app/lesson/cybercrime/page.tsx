import React from "react";
import cyberCrime from "../../../public/icons/cybercrime.png";
import Image from "next/image";
import Link from "next/link";

export default function CardingLesson() {
  const lesson = {
    id: 1,
    name: "Cyber-crime",
    pic: cyberCrime,
    definisi:
      "Cybercrime adalah aktivitas kriminal yang menargetkan atau menggunakan komputer, jaringan komputer, atau perangkat yang terhubung dalam jaringan. Sebagian besar kejahatan dunia maya dilakukan oleh para penjahat dunia maya atau peretas yang ingin mendapatkan uang. Namun, terkadang kejahatan dunia maya bertujuan merusak komputer atau jaringan dengan alasan selain keuntungan finansial. Alasan tersebut bisa bersifat politik atau personal. Kejahatan dunia maya dapat dilakukan oleh individu maupun organisasi. Beberapa penjahat dunia maya terorganisir, menggunakan teknik yang canggih, dan memiliki keahlian teknis yang tinggi. Yang lainnya adalah peretas pemula.",
    penutup:
      "Menghindari kejahatan siber sangat penting untuk melindungi diri dan data Anda. Dengan menjaga perangkat lunak terbaru, menggunakan kata sandi yang kuat, dan berhati-hati terhadap email dan tautan yang mencurigakan, Anda dapat mengurangi risiko menjadi korban serangan siber. Selalu ingat untuk tetap waspada secara online, menggunakan solusi keamanan yang terpercaya, dan menghindari berbagi informasi pribadi atau rahasia dengan sumber yang tidak terpercaya. Dengan mengambil tindakan pencegahan ini, Anda dapat menjaga keamanan digital Anda dan mengurangi potensi dampak dari kejahatan siber.",
    modus: [
      "Serangan Malware: Serangan malware adalah ketika sistem komputer atau jaringan terinfeksi virus komputer atau jenis malware lainnya. Komputer yang terpengaruh oleh malware dapat digunakan oleh penjahat dunia maya untuk beberapa tujuan. Ini termasuk mencuri data rahasia, menggunakan komputer untuk melakukan tindakan kriminal lainnya, atau menyebabkan kerusakan pada data.",
      "Phishing: Ketika email spam, atau bentuk komunikasi lainnya, dikirim dengan tujuan untuk menipu penerima agar melakukan sesuatu yang merusak keamanan mereka. Pesan kampanye phishing dapat berisi lampiran terinfeksi atau tautan ke situs jahat, atau mereka mungkin meminta penerima untuk merespons dengan informasi rahasia.",
      "DDoS: Serangan Distributed Denial-of-Service (DDoS) adalah jenis serangan kejahatan dunia maya yang digunakan oleh penjahat dunia maya untuk menjatuhkan sistem atau jaringan. Terkadang perangkat IoT (Internet of Things) yang terhubung digunakan untuk meluncurkan serangan DDoS.",
      "dll",
    ],
    motif: [
      "Keuntungan Finansial: Banyak kejahatan siber dilakukan dengan tujuan mendapatkan keuntungan finansial. Hal ini dapat mencakup pencurian data pribadi atau keuangan, penipuan online, pencurian identitas, penambangan kripto (cryptojacking), atau ransomware yang mengenkripsi data dan meminta tebusan.",
      "Penyusupan atau Pengintaian: Motif lain untuk kejahatan siber adalah menyusup ke sistem atau jaringan dengan tujuan mengakses informasi rahasia atau intelijen bisnis. Peretas mungkin ingin mencuri informasi rahasia, mengakses data penting, atau merusak reputasi suatu organisasi.",
      "Kejahatan Organisasi: Ada kasus di mana kelompok atau organisasi dengan motif tertentu melakukan kejahatan siber untuk mencapai tujuan politik, ekonomi, atau ideologis. Serangan terhadap infrastruktur kritis, seperti jaringan listrik atau sistem transportasi, dapat dilakukan sebagai bentuk perlawanan atau aksi ekstrem.",
    ],
    dampak: [
      "Kehilangan Data dan Privasi: Serangan kejahatan siber dapat mengakibatkan pencurian data pribadi, keuangan, atau informasi rahasia lainnya. Hal ini dapat mengancam privasi individu dan organisasi, dan dapat digunakan untuk tujuan penipuan, identitas palsu, atau kejahatan lainnya.",
      "Gangguan Operasional: Serangan kejahatan siber, seperti serangan DDoS atau ransomware, dapat mengganggu operasional suatu organisasi atau jaringan. Ini dapat mengakibatkan downtime yang signifikan, kerugian bisnis, dan kesulitan dalam menjalankan aktivitas sehari-hari.",
      "Ancaman Keamanan Nasional: Beberapa serangan kejahatan siber ditujukan pada infrastruktur kritis suatu negara, seperti sistem keuangan, listrik, atau transportasi. Jika berhasil, serangan semacam itu dapat mengganggu stabilitas negara dan keamanan nasional.",
    ],
    prevensi: [
      "Gunakan kata sandi yang kuat: Pastikan untuk menggunakan kata sandi yang kuat yang tidak mudah ditebak orang dan jangan mencatatnya di tempat manapun.",
      "Jangan pernah membuka lampiran dalam email spam: Jangan pernah membuka lampiran dari pengirim yang tidak Anda kenal.",
      "Pahami risiko: Sadarilah tentang berbagai jenis serangan kejahatan siber yang mungkin terjadi dan pelajari cara mengidentifikasinya. Pendidikan diri tentang ancaman keamanan digital adalah langkah pertama dalam melindungi diri Anda.",
    ],
    link: "/lesson/cybercrime/quiz",
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

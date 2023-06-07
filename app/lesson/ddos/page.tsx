import React from "react";
import DDos from "../../../public/icons/ddos.png";
import Image from "next/image";
import Link from "next/link";

export default function SpoofLesson() {
  const lesson = {
    id: 4,
    name: "Distributed Denial of Service",
    pic: DDos,
    definisi:
      "Spoofing adalah istilah umum untuk jenis perilaku yang melibatkan seorang penjahat cyber menyamar sebagai entitas atau perangkat tepercaya untuk meminta Anda melakukan sesuatu yang menguntungkan bagi peretas — dan merugikan Anda. Setiap kali penipu online menyembunyikan identitas mereka sebagai sesuatu yang lain, itu adalah spoofing. Spoofing dapat diterapkan pada berbagai saluran komunikasi dan dapat melibatkan tingkat kompleksitas teknis yang berbeda. Serangan spoofing biasanya melibatkan unsur teknik sosial, di mana penipu secara psikologis memanipulasi korban mereka dengan memanfaatkan kerentanan manusia seperti rasa takut, keserakahan, atau kurangnya pengetahuan teknis.",
    penutup:
      "Untuk melindungi diri Anda dari serangan spoofing, tetap waspada, bijaksana, dan ikuti praktik keamanan digital yang baik. Ingatlah untuk selalu memverifikasi identitas pengirim sebelum memberikan informasi pribadi atau melakukan tindakan yang diminta. Dengan menjaga kehati-hatian dan mengadopsi langkah-langkah pencegahan yang disebutkan sebelumnya, Anda dapat mengurangi risiko menjadi korban serangan spoofing. Prioritaskan keamanan dan privasi Anda dalam setiap interaksi online.",
    modus: [
      "Spoofing umumnya bergantung pada dua elemen - spoof itu sendiri, seperti email atau situs web palsu, dan aspek rekayasa sosial yang mendorong korban untuk mengambil tindakan. Misalnya, pelaku spoofing dapat mengirim email yang tampak berasal dari rekan kerja senior atau manajer yang tepercaya, meminta Anda mentransfer sejumlah uang secara online dan memberikan alasan yang meyakinkan untuk permintaan tersebut. Pelaku spoofing sering kali tahu cara memanipulasi korban untuk melakukan tindakan yang diinginkan - dalam contoh ini, memberikan otorisasi transfer dana palsu - tanpa menimbulkan kecurigaan.",
    ],
    tipe: [],
    motif: [
      "Memperoleh Keuntungan Finansial: Para pelaku spoofing seringkali melakukan kejahatan ini dengan tujuan mendapatkan keuntungan finansial. Mereka menggunakan teknik rekayasa sosial untuk menipu korban agar mengungkapkan informasi pribadi, seperti nomor kartu kredit atau kata sandi, yang kemudian digunakan untuk melakukan pencurian identitas atau melakukan transaksi finansial yang merugikan korban.",
      "Pencurian Informasi Rahasia: Spoofing juga digunakan untuk mencuri informasi rahasia, baik itu informasi pribadi atau rahasia perusahaan. Dengan menyamar sebagai entitas tepercaya, seperti rekan kerja atau manajer, para pelaku spoofing dapat mengirim email atau pesan palsu yang mengandung permintaan untuk mengungkapkan informasi rahasia atau memberikan akses ke sistem sensitif. Hal ini dapat mengakibatkan pencurian data yang merugikan korban atau perusahaan.",
      "Manipulasi dan Penipuan: Salah satu tujuan utama dari serangan spoofing adalah untuk memanipulasi korban agar melakukan tindakan tertentu yang menguntungkan bagi penyerang. Dengan menyamar sebagai entitas tepercaya, para pelaku spoofing menggunakan rekayasa sosial untuk memanipulasi emosi, seperti rasa takut, keserakahan, atau kurangnya pengetahuan teknis korban. Mereka menciptakan situasi yang membuat korban melakukan tindakan yang diinginkan oleh penyerang, seperti mentransfer uang atau memberikan akses ke sistem.",
    ],
    dampak: [
      "Serangan spoofing yang berhasil dapat memiliki konsekuensi serius, termasuk pencurian informasi pribadi atau perusahaan, pengumpulan kredensial untuk digunakan dalam serangan lanjutan, penyebaran malware, mendapatkan akses jaringan yang tidak sah, atau melewati kontrol akses. Bagi bisnis, serangan spoofing kadang-kadang dapat menyebabkan serangan ransomware atau pelanggaran data yang merugikan dan mahal.",
    ],
    prevensi: [
      "Hindari mengklik tautan atau membuka lampiran dari sumber yang tidak dikenal.",
      "Jangan menjawab email atau panggilan dari pengirim yang tidak dikenali.",
      "Jika memungkinkan, aktifkan otentikasi dua faktor.",
      "Gunakan kata sandi yang kuat.",
      "Periksa pengaturan privasi online Anda.",
      "Jangan memberikan informasi pribadi secara online.",
      "Pastikan jaringan dan perangkat lunak Anda tetap diperbarui.",
      "Waspadai situs web, email, atau pesan dengan kesalahan ejaan atau tata bahasa yang buruk.",
    ],
    link: "/lesson/ddos/quiz",
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
              {/* <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Tipe
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.tipe?.map((item) => (
                  <li className="my-2">{item}</li>
                ))}
              </ul> */}
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

import React from "react";
import phishing from "../../../public/icons/phising.png";
import Image from "next/image";
import Link from "next/link";

export default function SpoofLesson() {
  const lesson = {
    id: 6,
    name: "Phishing",
    pic: phishing,
    definisi:
      "Phishing atau penipuan online bertujuan untuk membujuk Anda untuk mengambil tindakan tertentu yang memberikan akses kepada penipu ke perangkat Anda, akun, atau informasi pribadi Anda. Dengan berpura-pura menjadi orang atau organisasi yang Anda percayai, mereka lebih mudah menginfeksi perangkat Anda dengan malware atau mencuri informasi kartu kredit Anda.Dengan kata lain, skema rekayasa sosial ini 'menjerat' Anda dengan rasa percaya untuk mendapatkan informasi berharga Anda. Ini bisa berupa login media sosial, atau bahkan seluruh identitas Anda melalui nomor keamanan sosial Anda.Skema ini dapat mendorong Anda untuk membuka lampiran, mengikuti tautan, mengisi formulir, atau memberikan informasi pribadi melalui balasan. Dengan logika tersebut, Anda harus selalu waspada, yang dapat menjadi melelahkan.",
    penutup:
      "Untuk menghindari kejahatan phishing, selalu berhati-hati dan waspada saat berurusan dengan pesan atau permintaan online. Jangan pernah memberikan informasi pribadi atau sensitif secara sembarangan, pastikan untuk memverifikasi keaslian sumber pesan, dan hindari mengklik tautan atau lampiran yang mencurigakan. Selalu perbarui perangkat lunak dan sistem operasi Anda untuk menjaga keamanan digital Anda. Dengan tetap waspada dan menggunakan akal sehat, Anda dapat melindungi diri dari serangan phishing dan menjaga informasi pribadi Anda tetap aman.",
    modus: [
      "Email phishing: muncul di kotak masuk email Anda — biasanya dengan permintaan untuk mengikuti tautan, mengirim pembayaran, membalas dengan informasi pribadi, atau membuka lampiran. Alamat email pengirim mungkin dirancang sedemikian rupa sehingga mirip dengan alamat yang valid dan mungkin berisi informasi yang terasa pribadi bagi Anda.",
      "Domain spoofing: adalah cara populer yang digunakan oleh penipu email untuk meniru alamat email yang valid. Skema penipuan ini menggunakan domain perusahaan yang nyata (contoh: www.tokopedia.com) dan mengubahnya. Anda mungkin terlibat dengan alamat seperti 'tok0pedia.com' dan menjadi korban skema penipuan tersebut.",
      "SMS phishing (smishing): serupa dengan vishing, skema ini akan meniru organisasi yang valid dengan menggunakan urgensi dalam pesan teks singkat untuk menipu Anda. Dalam pesan tersebut, biasanya terdapat tautan atau nomor telepon yang mereka ingin Anda gunakan. Layanan pesan seluler juga rentan terhadap jenis penipuan ini.",
      "Social Media Phishing: melibatkan penjahat menggunakan postingan atau pesan langsung untuk membujuk Anda masuk ke perangkap. Beberapa penipuan tersebut terang-terangan seperti hadiah gratis atau halaman 'resmi' organisasi yang mencurigakan dengan permintaan yang mendesak. Ada juga yang meniru teman Anda atau membangun hubungan dengan Anda dalam jangka waktu lama sebelum 'menyerang' untuk mencapai tujuan mereka.",
    ],
    motif: [
      "Keuntungan finansial: Motif utama di balik phishing adalah mendapatkan keuntungan finansial. Penjahat phishing mencoba mencuri informasi seperti rincian kartu kredit atau data keuangan korban untuk melakukan penipuan atau pencurian identitas. Mereka dapat menjual informasi tersebut atau menggunakannya untuk mencuri uang secara langsung.",
      "Penyebaran malware: Beberapa penjahat phishing menggunakan teknik ini untuk menyebarkan malware atau virus ke perangkat korban. Mereka mengirimkan email atau pesan dengan lampiran berbahaya atau tautan yang, jika diklik, akan menginstal perangkat lunak berbahaya pada perangkat korban. Hal ini memungkinkan penjahat untuk mencuri informasi atau mengambil alih kontrol perangkat korban.",
      "Peretasan akun: Penjahat phishing ingin mencuri akun online korban, seperti akun media sosial, email, atau platform keuangan. Dengan mendapatkan informasi login korban, mereka dapat mengakses akun-akun tersebut dan menggunakannya untuk penipuan, penyebaran spam, atau aktivitas kriminal lainnya.",
    ],
    dampak: [
      "Jika penjahat berhasil mendapatkan akses ke informasi keuangan korban, mereka dapat menggunakan kartu kredit, rekening bank, atau informasi keuangan lainnya untuk melakukan penipuan, memindahkan dana, atau melakukan transaksi yang merugikan korban secara finansial.",
      "Jika penjahat berhasil memperoleh akses ke akun bisnis atau data pelanggan, mereka dapat menyebabkan kerugian finansial, mengakses informasi rahasia, atau mengganggu operasional bisnis secara keseluruhan.",
      "Dalam beberapa kasus phishing, penjahat menggunakan metode ini untuk mengirimkan perangkat lunak berbahaya (malware) atau virus ke perangkat korban. Malware ini dapat merusak sistem komputer atau perangkat mobile, mencuri data pribadi, mengendalikan perangkat korban, atau membuka pintu bagi serangan tambahan.",
    ],
    prevensi: [
      "Hati-hati sebelum memberikan informasi sensitif.",
      "Jangan percaya pada pesan yang mengkhawatirkan sebelum memverifikasinya.",
      "Pastikan perangkat lunak dan sistem operasi Anda selalu diperbarui.",
      "Hindari mengklik tautan yang disematkan.",
    ],
    link: "/lesson/phishing/quiz",
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
                {lesson.modus?.map((item) => (
                  <li className="my-2">{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 px-2 my-4">
                Dampak
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.dampak?.map((item) => (
                  <li className="my-2">{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Motif
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.motif?.map((item) => (
                  <li className="my-2">{item}</li>
                ))}
              </ul>
              {/* Label */}
              <h4 className="text-md sm:text-xl text-light bg-dark w-1/3 -ml-2 pl-1 md:pl-2 my-4">
                Pencegahan
              </h4>
              <ul className="list-disc mx-4 text-sm md:text-md lg:text-lg my-4">
                {lesson.prevensi?.map((item) => (
                  <li className="my-2">{item}</li>
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

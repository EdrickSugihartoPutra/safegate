import React from "react";
import carding from "../../../public/icons/carding.png";
import Image from "next/image";
import Link from "next/link";

export default function CardingLesson() {
  const lesson = {
    id: 5,
    name: "Carding",
    pic: carding,
    definisi:
      "Carding, juga dikenal sebagai credit card stuffing, adalah ancaman keamanan situs web di mana penyerang (yang dikenal sebagai carders) mendapatkan nomor kartu kredit yang dicuri dan memanfaatkan bot untuk melakukan berbagai upaya otorisasi secara paralel menggunakan kredensial kartu kredit yang dicuri. Serangan carding tidak hanya digunakan untuk kartu pembayaran, tetapi juga untuk kartu hadiah dan voucher.",
    penutup:
      "Jaga keamanan data pribadi Anda, perhatikan praktik keamanan, dan berperan aktif dalam upaya pencegahan, sehingga kita dapat terhindar dari tindaka kejahatan ini.",
    modus: [
      "Penyerang memperoleh data kartu yang dicuri. Mereka bisa melakukannya sendiri dengan melakukan card phishing, penipuan kartu hadiah, email phishing, atau serangan rekayasa sosial lainnya, atau dengan mengompromikan situs web menggunakan vektor ancaman lainnya. Atau mereka bisa membeli data kartu yang dicuri dari dark web.",
      "Mereka menggunakan bot untuk melakukan beberapa transaksi kecil melalui berbagai platform e-commerce dan pembayaran untuk mengidentifikasi detail kartu yang valid.",
      "Carder mencoba mengidentifikasi apakah kartu tersebut dilaporkan dicuri atau jika transaksi berhasil.",
    ],
    motif: [
      "Keuntungan Finansial: Motivasi utama bagi banyak carder adalah mencari keuntungan finansial. Dengan mencuri atau memperoleh data kartu kredit yang sah, mereka dapat melakukan transaksi yang tidak sah untuk mendapatkan uang atau membeli barang tanpa membayar.",
      "Kesempatan dan Kemudahan: Beberapa orang tergoda untuk terlibat dalam carding karena kesempatan dan kemudahan yang ditawarkan. Dengan adanya akses ke teknologi, instruksi, dan alat carding yang tersedia di internet, orang dapat dengan relatif mudah terlibat dalam aktivitas tersebut tanpa banyak usaha.",
      "Tantangan Teknis: Bagi sebagian orang, carding mungkin dianggap sebagai tantangan teknis. Mereka tertarik untuk menguji keahlian mereka dalam meretas sistem keamanan dan mengatasi langkah-langkah perlindungan yang diterapkan oleh perusahaan.",
    ],
    dampak: [
      "Chargeback: Ketika pemilik kartu melaporkan aktivitas penipuan pada kartunya, bank akan membalikkan transaksi dan mengembalikan uang. Hal ini mengakibatkan dikenakannya sanksi chargeback.",
      "Biaya Pengolahan: Selain sanksi chargeback, pedagang juga menghadapi biaya pembalikan penipuan dan biaya otentikasi yang lebih tinggi sebagai bagian dari perjanjian layanan mereka.",
      "Kerugian Produk: Meskipun penipuan terdeteksi, kemungkinan kecil bagi pedagang untuk mendapatkan kembali produk yang dibeli oleh carder.",
      "Kerusakan Reputasi: Card phishing dan carding menyebabkan merek e-commerce kehilangan kepercayaan dan kredibilitas di antara pelanggan dan pemroses pembayaran.",
    ],
    prevensi: [
      "Pendidikan dan Kesadaran: Tingkatkan pengetahuan dan kesadaran tentang kejahatan carding di antara pengguna kartu kredit, pedagang, dan pemroses pembayaran. Ajarkan mereka tanda-tanda peringatan, praktik keamanan, dan langkah-langkah pencegahan yang diperlukan.",
      "Keamanan Data dan Transaksi: Lindungi data kartu kredit dengan sangat hati-hati. Terapkan kebijakan keamanan yang kuat, seperti enkripsi data, perlindungan terhadap serangan hacking, dan validasi otentikasi yang kuat saat melakukan transaksi. Gunakan solusi pemantauan transaksi untuk mendeteksi pola transaksi mencurigakan dan mengambil tindakan yang sesuai.",
      "Verifikasi Identitas Pengguna: Implementasikan metode verifikasi identitas yang kuat saat pengguna melakukan transaksi. Misalnya, meminta informasi tambahan, seperti kode verifikasi yang dikirim melalui SMS, atau menggunakan biometrik, seperti sidik jari atau pengenalan wajah, untuk memastikan bahwa pemilik kartu adalah orang yang sah.",
      "Pelatihan Karyawan: Berikan pelatihan yang memadai kepada karyawan tentang praktik keamanan, termasuk cara mengenali tanda-tanda serangan carding dan tindakan yang harus diambil dalam kasus yang dicurigai.",
    ],
    link: "/lesson/carding/quiz",
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

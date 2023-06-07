import Image from "next/image";
import Navbar from "../components/navbar";
import testImage from "../../public/images/secImg.png";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="flex flex-wrap w-fit rounded-lg p-4 text-dark mt-24 mb-5 bg-white mx-4">
        <div className="flex flex-col w-full px-4 mb-10 md:w-1/2">
          <h4 className="text-dark p-1 font-bold mb-4 text-xl max-w-xl lg:text-3xl">
            Tentang SafeGate
          </h4>
          <p className="text-sm font-medium text-justify">
            <span className="font-bold">SafeGate</span> merupakan sebuah
            aplikasi edukasi keamanan digital yang dibuat untuk mempermudah
            penggunanya untuk mengenali berbagai macam kejahatan siber dengan
            pendekatan yang mudah dan menyenangkan.
          </p>
          <div className="flex flex-col justify-evenly h-full">
            <div className="container rounded-lg bg-red-400 bg-opacity-70 text-justify items-center p-4 my-2">
              <h4 className="text-lg font-semibold ">Disclaimer</h4>
              <p className="text-sm">
                Informasi yang diberikan pada materi pemebelajaran yang tersedia
                pada website ini masih butuh dilengkapi dan belum tervalidasi
                oleh ahli di bidangnya. Aplikasi ini bertujuan untuk menjadi
                suatu purwarupa bagi aplikasi pembelajaran atau sistem
                informasi.
              </p>
            </div>
            <div className="flex justify-around my-4">
              <div className="w-[30px] h-[30px] rounded-full bg-salmon bg-opacity-60"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-dark bg-opacity-60"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-gold bg-opacity-60"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-leaf bg-opacity-60"></div>
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="flex flex-col w-full px-4 mb-10 md:w-1/2">
          <h4 className="text-dark font-bold mb-4 text-xl max-w-xl lg:text-3xl">
            Tujuan Pembuatan
          </h4>
          <div className="flex  flex-col text-sm font-medium text-justify">
            <p className="mb-4">
              Website <span className="font-bold">SafeGate</span> dibangun untuk
              meraih gelar Sarjana Komputer sebagai proyek tugas akhir skripsi.
            </p>
            <Image
              src={testImage}
              alt=""
              className="rounded-lg w-2/3 sm:w-1/2 py-4 self-center"
            />

            <p className="mb-4">
              Pembuatan website <span className="font-bold">SafeGate</span>{" "}
              mengadopsi metode gamifikasi menggunakan{" "}
              <i>Octalysis Framework</i> yang akan menambah motivasi pengguna
              melalui stimulasi <i>8 core drives</i> pengguna.
            </p>
            <div className="flex-col">
              <h3 className="text-xl text-dark font-semibold mb-2">
                Referensi
              </h3>
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col ml-0 sm:mr-10">
                  <p className="text-base font-medium mb-2">Aset Grafis:</p>
                  <ul className="list-disc ml-4 mb-4 sm:mb-0">
                    <li>Flaticon</li>
                    <li>Freepik</li>
                    <li>React Icons</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium mb-2">Sumber Materi:</p>
                  <ul className="list-disc ml-4">
                    <li>Studi Literasi(berbagai sumber)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

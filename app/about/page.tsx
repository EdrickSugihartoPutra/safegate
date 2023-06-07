import Image from "next/image";
import Navbar from "../components/navbar";
import testImage from "../../public/images/secImg.png";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="flex flex-wrap w-fit rounded-lg p-4 text-dark mt-24 bg-white mx-4">
        <div className="flex flex-col w-full px-4 mb-10 md:w-1/2">
          <h4 className="font-bold mb-4 text-xl max-w-xl lg:text-3xl">
            Tentang SafeGate
          </h4>
          <p className="text-sm font-medium text-justify">
            <span className="font-bold">SafeGate</span> merupakan sebuah
            aplikasi edukasi keamanan digital yang dibuat untuk mempermudah
            penggunanya untuk mengenali berbagai macam kejahatan siber dengan
            pendekatan yang mudah dan menyenangkan.
          </p>
          <Image
            src={testImage}
            alt=""
            className="rounded-lg w-2/3 py-4 self-center"
          />
        </div>
        {/* Separator */}
        <div className="flex flex-col w-full px-4 mb-10 md:w-1/2">
          <h4 className="font-bold mb-4 text-xl max-w-xl lg:text-3xl">
            Tujuan Pembuatan
          </h4>
          <div className="text-sm font-medium text-justify">
            <p className="mb-4">
              Aplikasi <span className="font-bold">SafeGate</span> dibangun
              untuk meraih gelar Sarjana Komputer sebagai proyek tugas akhir
              skripsi.
            </p>
            <p className="mb-4"></p>
          </div>
        </div>
      </div>
    </>
  );
}

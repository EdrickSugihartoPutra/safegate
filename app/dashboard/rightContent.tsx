import Image from "next/image";

export default function RightContent() {
  return (
    <section className="flex flex-col items-center">
      <div className="container flex justify-center mb-2">
        <h2 className="font-semibold text-md text-light text-center my-4">
          Peringkat Pengguna
        </h2>
      </div>
      <div className="flex w-[90%] items-center bg-primary rounded-lg justify-evenly py-2 mb-2 shadow-md">
        <Image
          src="/placeholder.jpg"
          alt="profilePic"
          width={40}
          height={40}
          className="rounded-full border bg-white scale-2"
        />
        <p className="text-base text-light">Username</p>
      </div>
      <div className="flex w-[90%] items-center bg-slate-200 rounded-lg justify-evenly py-2 mb-2 shadow-md">
        <Image
          src="/placeholder.jpg"
          alt="profilePic"
          width={40}
          height={40}
          className="rounded-full border bg-white scale-2"
        />
        <p className="text-base text-dark">Username</p>
      </div>
    </section>
  );
}

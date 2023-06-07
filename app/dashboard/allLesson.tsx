import { BsJournalBookmark } from "react-icons/bs";
import Image from "next/image";
import { lessonsIdx } from "../lesson/lessonsData";
import Link from "next/link";

export default function AllLesson() {
  return (
    <section id="allLesson" className="mb-8">
      <div className="relative container">
        <div className="flex items-center my-4">
          <div className="flex items-center bg-dark  rounded-full py-2 px-4">
            <div className="p-2 rounded-full bg-gold">
              <BsJournalBookmark size={20} className="text-dark" />
            </div>
            <h2 className="text-light font-semibold text-md ml-2">
              Semua Pelajaran
            </h2>
          </div>
        </div>
        <div className="relative max-w-full container flex bg-transparent px-0 ">
          <div className="container flex w-full px-0 gap-4 overflow-x-auto pb-4">
            {/* map subjects */}
            {lessonsIdx.map((subject, idx) => (
              <div
                key={idx}
                className={`flex shrink-0 w-[220px] h-[300px] items-center justify-center bg-primary rounded-lg shadow-lg shadow-dark`}
              >
                <div className="flex flex-col gap-6 items-center ">
                  <div className="container flex flex-col items-center">
                    <h2 className="font-semibold text-lg text-gold">
                      Pelajari
                    </h2>
                    <h2 className="text-sm text-light uppercase text-center">
                      {subject.name}
                    </h2>
                  </div>

                  <Image
                    src={subject.pic}
                    alt={subject.name}
                    height={70}
                    width={70}
                    className={`m-0 object-cover `}
                  />
                  <Link
                    href={subject.link}
                    className="px-10 py-2 rounded-sm text-white bg-dark mt-4 transition duration-150 hover:bg-gold hover:text-dark hover:font-semibold"
                  >
                    Mulai
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

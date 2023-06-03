import { BsJournalBookmark } from "react-icons/bs";
import Image from "next/image";
import Phishing from "../../public/icons/phising.png";
import Hacking from "../../public/icons/hacker.png";
import Ransom from "../../public/icons/ransomware.png";
import Spoofing from "../../public/icons/spoofing.png";
import DDos from "../../public/icons/ddos.png";

export default function AllLesson() {
  const subjects = [
    {
      title: "Phishing",
      bg: "#9bbace",
      icon: Phishing,
    },
    {
      title: "Spoofing",
      bg: "#Fc7e7e",
      icon: Spoofing,
    },
    {
      title: "Hacking",
      bg: "#D7EDAF",
      icon: Hacking,
    },
    {
      title: "Ransomeware",
      bg: "#C8B8F2",
      icon: Ransom,
    },
    {
      title: "DDoS",
      bg: "#A2D8C0",
      icon: DDos,
    },
  ];
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
            {subjects.map((subject) => (
              <div
                className={`flex shrink-0 w-[220px] h-[300px] items-center justify-center bg-primary rounded-lg shadow-lg shadow-dark`}
              >
                <div className="flex flex-col gap-6 items-center ">
                  <div className="container flex flex-col items-center">
                    <h2 className="font-semibold text-lg text-light">
                      Pelajari
                    </h2>
                    <h2 className="text-lg text-light uppercase">
                      {subject.title}
                    </h2>
                  </div>

                  <Image
                    src={subject.icon}
                    alt={subject.title}
                    height={70}
                    width={70}
                    className={`m-0 object-cover `}
                  />
                  <button
                    type="button"
                    className="px-10 py-2 rounded-sm text-white bg-dark mt-4 transition duration-150 hover:bg-gold hover:text-dark hover:font-semibold"
                  >
                    Mulai
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

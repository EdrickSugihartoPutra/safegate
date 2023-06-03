import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Lesson() {
  return (
    <>
      <Navbar />
      <div className="container flex text-light bg-primary justify-center w-full mt-24 rounded-lg shadow-lg shadow-dark">
        {/* left content */}
        <div className=" hidden sm:flex w-1/4">
          <div className="flex w-full mb-8 px-3 py-4 overflow-y-auto">
            <div className="flex justify-center w-full">
              <h3 className="font-semibold ">Lesson Title</h3>
            </div>
          </div>
        </div>
        {/* separator */}
        <div className="hidden bg-dark w-[1px] my-6 md:block"></div>
        {/* right content */}
        <div className="flex w-full sm:w-3/4 h-full">
          <div className="flex flex-col items-center px-2 py-4">
            <h3 className="text-3xl font-semibold mb-4">Lesson Title</h3>
            <div className="">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                impedit, a unde et ipsa repudiandae, eligendi in minus laborum
                beatae sed quo adipisci! Vitae eveniet maxime dolores quae
                libero alias totam assumenda? Vel quisquam aliquid id ad nemo at
                rem officiis repudiandae debitis voluptatibus doloribus nostrum
                fuga officia illum, nesciunt beatae minima iure saepe molestias
                velit explicabo quae aspernatur ab! Officia architecto eum
                accusantium vel quaerat aspernatur corporis neque ipsum. Cum
                voluptatibus laborum incidunt. Tenetur nihil amet, veritatis est
                voluptate quidem, repellendus quae inventore, ea totam tempora
                ratione libero mollitia. Ex hic, sunt mollitia omnis corrupti
                dolorem deserunt maxime libero:
              </p>
              <ul className="list-disc mx-4 text-sm my-4">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
                aliquid provident omnis, voluptatem eaque natus nostrum ipsum
                rerum. Voluptatem. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum.
              </p>
            </div>
            <Link
              href="/quiz"
              className="flex justify-center text-md w-1/3 mt-4 mx-8 py-2 text-white font-medium rounded-lg border border-transparent bg-dark transition duration-150 hover:bg-darker hover:border-dark "
            >
              Mulai Kuis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

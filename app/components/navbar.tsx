"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { BsFillShieldFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const hamburgerToggle = () => {
    setIsOpen(!isOpen);
  };

  if (typeof window !== undefined || typeof document !== undefined) {
    // @ts-ignore (not recommended)
    window.onscroll = function () {
      const header = document.querySelector("header");
      //   @ts-ignore (not recommended)
      const fixedNav = header.offsetTop;

      if (window.scrollY > fixedNav) {
        header?.classList.add("navbar-fixed");
      } else {
        header?.classList.remove("navbar-fixed");
      }
    };
  }
  const logout = async () => {
    await signOut(auth);
    // Sign-out successful.
    return router.push("/");
  };
  return (
    <header className="fixed-top bg-white bg-opacity-80 absolute top-0 left-0 w-full items-center z-10 transition duration-75">
      <div className="fixed-top container">
        <div className="fixed-top elative flex items-center ">
          <div className="fixed-top flex bg-secondary items-center gap-1 px-6 py-4 sm:my-2 rounded scale-75 sm:scale-100">
            <BsFillShieldFill className="text-light" />
            <a className="font-bold text-lg text-light block">SafeGate</a>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={hamburgerToggle}
              className={`block absolute right-4 ${
                isOpen ? "hamburger-active" : ""
              } lg:hidden`}
              id="hamburger"
              name="hamburger"
              type="button"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="navMenu"
              className={`${
                isOpen ? "" : "hidden"
              } absolute right-4 top-full py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="/dashboard"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-gold group-hover:font-semibold"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/leaderboard"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-gold group-hover:font-semibold"
                  >
                    Peringkat
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/lesson"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-gold group-hover:font-semibold"
                  >
                    Lesson
                  </Link>
                </li>
                {/* separator */}
                <div className="bg-rounded bg-secondary w-[2px]"></div>
                <li className="group">
                  <Link
                    href="/about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-gold group-hover:font-semibold items-center gap-1"
                  >
                    Tentang
                    <FiInfo />
                  </Link>
                </li>
                <li className="group lg:hidden">
                  <span className="text-base text-dark py-2 mx-8 flex group-hover:text-gold group-hover:font-semibold items-center gap-1">
                    LogOut
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden ml-auto lg:flex">
            <div
              onClick={logout}
              className="flex w-full gap-2 rounded bg-salmon py-2 px-4 items-center shadow-lg shado-dark hover:bg-[#FE532D] hover:cursor-pointer"
            >
              <Image
                src="/placeholder.jpg"
                alt=""
                height={30}
                width={30}
                className="rounded-full"
              />
              <h2 className="text-light">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
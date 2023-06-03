"use client";

import React from "react";
import Navbar from "../components/navbar";
import { users } from "./dummy";

import { BiTrophy } from "react-icons/bi";
import Profile from "./profile";

export default function Leaderboard() {
  const clickHandler = (e: any) => {
    console.log(e.target);
  };
  return (
    <>
      <Navbar />
      <div className="container mt-28">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-gold p-2">
              <BiTrophy size={30} className="text-darker" />
            </div>
            <h1 className="text-light text-3xl font-semibold uppercase">
              Leaderboard
            </h1>
            <div className="rounded-full bg-gold p-2">
              <BiTrophy size={30} className="text-darker" />
            </div>
          </div>
          <div className="flex w-[90%] justify-evenly my-4">
            <button
              onClick={clickHandler}
              className="rounded-full bg-light text-dark px-4 py-1 font-semibold shadow-lg shadow-dark hover:bg-slate-300"
              data-id="7"
            >
              7 Days
            </button>
            <button
              onClick={clickHandler}
              className="rounded-full bg-light text-dark px-4 py-1 font-semibold shadow-lg shadow-dark hover:bg-slate-300"
              data-id="30"
            >
              30 Days
            </button>
            <button
              onClick={clickHandler}
              className="rounded-full bg-light text-dark px-4 py-1 font-semibold shadow-lg shadow-dark hover:bg-slate-300"
              data-id="0"
            >
              All-Time
            </button>
          </div>

          <div className="flex justify-center irounded w-[90%]">
            <Profile userData={users} />
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsJournalBookmark } from "react-icons/bs";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import placeHolder from "../../public/placeholder.jpg";
import { getTotalLesson, getUserInfo } from "../firebaseConfig";
import { storeProfileData } from "./ProfileStoreJson";

export default function ProfileCard() {
  const [userName, setuserName] = useState({
    username:"NULL",
    level:0,
    coins:0,
    selectedPicID:1,
  });
  const [totallesson, settotallesson] = useState<number>(0);
  useEffect(()=>{
    getUserInfo().then((e)=>{
      setuserName(e)
    })
    getTotalLesson().then((e)=>settotallesson(e.lessondone.length))
  },[])
  return (
    <section className="relative mt-4" id="profileCard">
      <div className="container">
        <div className="flex flex-wrap justify-evenly gap-4 bg-primary py-6 sm:p-4 rounded-lg shadow-lg shadow-dark sm:flex-nowrap">
          {/* Left Profile */}
          <div className="bg-white-500 flex items-center w-full justify-center my-2">
            <div>
              <Image
                src={storeProfileData.find(e=>(e.id==userName.selectedPicID))!.profilePic}
                alt={storeProfileData.find(e=>(e.id==userName.selectedPicID))!.avatarName}
                className="rounded-full border bg-white w-20 sm:w-32 sm:scale-105 "
              />
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h3 className="font-medium text-lg text-light">{userName.username}</h3>
              <h3 className="font-medium text-lg text-light">(Lvl.{userName.level})</h3>
            </div>
          </div>
          {/* separator */}
          <div className="hidden bg-light  w-[1px] sm:block"></div>
          {/* Mid Profile */}
          <div className="flex flex-col justify-center items-center w-full mx-10 py-4 border-y-[1px] sm:flex-row sm:mx-0 sm:my-2 sm:border-none">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-leaf rounded-full scale-100 sm:scale-125">
                <BsJournalBookmark size={28} className="text-dark" />
              </div>
              <p className="sm:hidden text-xl text-light">XX</p>
            </div>
            <div className="ml-4 scale-75 sm:scale-100">
              <p className="hidden sm:block text-xl text-light">{userName.coins}</p>
              <p className="text-lg font-medium text-light">Latihan Selesai</p>
            </div>
          </div>
          {/* separator */}
          <div className="hidden bg-light  w-[1px] sm:block"></div>
          {/* Right Profile */}
          <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gold rounded-full scale-100 sm:scale-125">
                <HiOutlineBadgeCheck size={35} className="text-dark" />
              </div>
              <p className="sm:hidden text-xl text-light">XX</p>
            </div>
            <div className="ml-4 scale-75 sm:scale-100">
              <p className="hidden sm:block text-xl text-light">{totallesson}</p>
              <p className="text-lg font-medium text-light">
                Pelajaran Selesai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Navbar from "../components/navbar";
import ContinueCard from "./continueCard";
import RightContent from "./rightContent";
import ProfileCard from "./profileCard";
import AllLesson from "./allLesson";
import Footer from "../components/footer";
import Store from "./store";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex-col md:flex-row w-full mt-20">
          {/* Left Side */}
          <div className="w-full overflow-y-auto">
            <ProfileCard />
            <ContinueCard />
            <AllLesson />
          </div>
          {/* separator */}
          <div className="hidden bg-rounded bg-slate-300 w-[2px] mt-4 md:block"></div>
          {/* Right Side */}
          <div className="w-full container md:block">
            {/* <RightContent /> */}
            <Store />
          </div>
        </div>
      </div>
    </>
  );
}

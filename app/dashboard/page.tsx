"use client";
import Navbar from "../components/navbar";
import ContinueCard from "./continueCard";
import ProfileCard from "./profileCard";
import AllLesson from "./allLesson";
import Store from "./store";
import IntroCard from "./introCard";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex-col md:flex-row w-full mt-20">
          {/* Left Side */}
          <div className="w-full overflow-y-auto">
            <IntroCard />
            <ProfileCard />
            <ContinueCard />
            <AllLesson />
          </div>
          {/* separator */}
          <div className="w-full container md:block">
            <Store />
          </div>
        </div>
      </div>
    </>
  );
}

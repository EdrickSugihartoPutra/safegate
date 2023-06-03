import Navbar from "../components/navbar";
import ContinueCard from "./continueCard";
import RightContent from "./rightContent";
import ProfileCard from "./profileCard";
import AllLesson from "./allLesson";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="realtive container w-full mt-14 mx-auto sm:mt-28">
        <div className="flex flex-row">
          {/* Left Side */}
          <div className="w-full overflow-y-auto md:w-3/4">
            <ProfileCard />
            <ContinueCard />
            <AllLesson />
          </div>
          {/* separator */}
          <div className="hidden bg-rounded bg-slate-300 w-[2px] mt-4 md:block"></div>
          {/* Right Side */}
          <div className="hidden container w-1/4 md:block">
            <RightContent />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

import { BsJournalBookmark } from "react-icons/bs";
import Image from "next/image";
import placeHolder from "../../public/placeholder.jpg";
import { useEffect, useState } from "react";
import { getLatestLesson } from "../firebaseConfig";
import { lessonsIdx } from "../lesson/lessonsData";
import { useRouter } from "next/navigation";
export default function ContinueCard() {
  const [continueState, setcontinueState] = useState<any>({
    id: null,
  });
  useEffect(()=>{
    getLatestLesson().then((e)=>{
      if(e.id != null){
        const currless = lessonsIdx.find(element => element.id == e.id)
        const setCurr = currless? currless : {id:null}
        setcontinueState(setCurr)
      }
    })
  },[])
  const router = useRouter()
  const gotoHandler = (e:any)=>{
    if(continueState.id){
      router.push(`/lesson/${continueState.id}`)
    }
  }
  return (
    <>
      continueState.id?
      <section id="continueCard">
        <div className="relative container">
          <div className="flex items-center my-4">
            <div className="flex items-center bg-dark  rounded-full py-2 px-4">
              <div className="p-2 rounded-full bg-leaf">
                <BsJournalBookmark size={20} className="text-dark" />
              </div>
              <h2 className="text-light font-semibold text-md ml-2">
                Lanjut Pelajari
              </h2>
            </div>
          </div>
          <div className="relative container  bg-transparent shadow-lg h-[200px] px-0 shadow-dark">
            <div className="flex mt-4 h-full">
              <div className="flex bg-dark w-2/5 justify-center items-center left-0 h-full rounded-tl-lg rounded-bl-lg ">
                <div className="flex flex-col items-center justify-center h-full scale-75 sm:scale-100">
                  <Image
                    src={continueState.pic}
                    alt="testImage"
                    className="rounded-full w-20"
                  />
                  <h4 className="text-gold text-xl mt-2 text-center">
                    {continueState.name}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col h-full w-full bg-primary rounded-tr-lg rounded-br-lg shadow-lg">
                <div className="container h-2/3 py-4 px-8 flex flex-col justify-center">
                  <h4 className="text-lg text-white font-semibold">
                  {continueState.name}
                  </h4>
                  <h4 className="text-lg text-light uppercase mt-4">
                    {continueState.materi}
                  </h4>
                </div>
                <div className="flex w-full h-1/3 justify-end items-center">
                  <button
                    onClick={gotoHandler}
                    type="button"
                    className="bg-dark h-min rounded text-white px-4 py-2 mr-4 transition duration-150 hover:bg-gold hover:text-dark hover:font-semibold"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>:<></>
    </>
  );
}

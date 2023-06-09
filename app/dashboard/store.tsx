import Image from "next/image";
import placeHolder from "../../public/placeholder.jpg";
import { BsCoin } from "react-icons/bs";

export default function Store() {
  return (
    <>
      <div className="container bg-light bg-opacity-80 flex flex-wrap mt-4 py-4 rounded-lg gap-2 justify-center">
        <div className="flex text-light text-2xl font-bold w-full justify-center bg-dark rounded-full my-4">
          Toko Avatar
        </div>
        <div className="flex flex-col w-full p-4 bg-salmon bg-opacity-80 items-center justify-center shadow-lg shadow-darker rounded-lg">
          <h3 className="text-md">AvatarName</h3>
          <Image src={placeHolder} alt="" className="w-20 rounded-full" />
          <div className="flex items-center justify-center my-2 px-1 bg-dark rounded-full">
            <BsCoin
              size={20}
              className="text-dark bg-gold rounded-full shadow-dark shadow-sm p-1"
            />
            <h3 className="text-md text-gold">Price</h3>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 bg-salmon bg-opacity-80 items-center justify-center shadow-lg shadow-darker rounded-lg">
          <h3 className="text-md">AvatarName</h3>
          <Image src={placeHolder} alt="" className="w-20 rounded-full" />
          <div className="flex items-center justify-center my-2 px-1 bg-dark rounded-full">
            <BsCoin
              size={20}
              className="text-dark bg-gold rounded-full shadow-dark shadow-sm p-1"
            />
            <h3 className="text-md text-gold">Select</h3>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 bg-salmon bg-opacity-80 items-center justify-center shadow-lg shadow-darker rounded-lg">
          <h3 className="text-md">AvatarName</h3>
          <Image src={placeHolder} alt="" className="w-20 rounded-full" />
          <div className="flex items-center justify-center my-2 px-1 bg-dark rounded-full">
            <BsCoin
              size={20}
              className="text-dark bg-gold rounded-full shadow-dark shadow-sm p-1"
            />
            <h3 className="text-md text-gold">Selected</h3>
          </div>
        </div>
      </div>
    </>
  );
}

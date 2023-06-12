import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCoin } from "react-icons/bs";
import { addStoreData, getStoreData, setProfilePic } from "../firebaseConfig";
import { storeProfileData } from "./ProfileStoreJson";
import { BiStoreAlt } from "react-icons/bi";
export default function Store() {
  const router = useRouter();
  const [storedata, setstoredata] = useState<any>([
    {
      id: 1,
      avatarName: "",
      price: 0,
      profilePic: "",
      selected: false,
      sold: false,
    },
  ]);

  const mapStorewithdb = (items: {
    soldStoreItemIDs: any;
    selectedPicID: any;
  }) => {
    const picId = items["selectedPicID"];
    const boughtIds = items["soldStoreItemIDs"].map((e: any) => e);
    const mergeData = storeProfileData.map((e) => {
      return {
        id: e.id,
        avatarName: e.avatarName,
        price: e.price,
        profilePic: e.profilePic,
        selected: picId == e.id ? true : false,
        sold: e.id == 1 ? true : !!boughtIds.find((a: any) => a == e.id),
      };
    });
    return mergeData;
  };
  useEffect(() => {
    getStoreData().then((items) => {
      const mergeData = mapStorewithdb(items);
      setstoredata(mergeData);
    });
  }, []);
  const buttonSetProfile = (id: number) => {
    setProfilePic(id).then(() => {
      getStoreData().then((items) => {
        const mergeData = mapStorewithdb(items);
        setstoredata(mergeData);
        router.push("/reloading");
      });
    });
  };
  const buttonBuy = (id: number, amount: number) => {
    addStoreData(id, amount).then(() =>
      getStoreData().then((items) => {
        const mergeData = mapStorewithdb(items);
        setstoredata(mergeData);
      })
    );
  };
  const storeItemState = (
    buttonID: number,
    price: number = 19,
    selected: boolean,
    sold: boolean
  ) => {
    let buttonState = 1;
    if (selected) {
      buttonState = 3;
    } else if (sold) {
      buttonState = 2;
    }
    if (buttonState == 1) {
      return (
        <h3
          onClick={() => buttonBuy(buttonID, price)}
          className="text-md text-gold"
        >
          {price}
        </h3>
      );
    } else if (buttonState == 2) {
      return (
        <h3
          onClick={() => buttonSetProfile(buttonID)}
          className="text-md text-gold"
        >
          Select
        </h3>
      );
    } else if (buttonState == 3) {
      return <h3 className="text-md text-gold">Selected</h3>;
    }
    return <></>;
  };
  return (
    <>
      <div className="container flex-col justify-center items-center bg-transparent bg-opacity-80 flex flex-wrap rounded-lg gap-2 px-0 mb-10">
        <div className="flex self-start text-light px-4 py-2 font-bold w-fit items-center justify-center bg-dark rounded-full my-4">
          <div className="p-2 rounded-full bg-salmon">
            <BiStoreAlt size={20} className="text-dark" />
          </div>
          <h2 className="text-light font-semibold text-md ml-2">Toko Avatar</h2>
        </div>
        <div className="container flex w-full px-0 gap-4 overflow-x-auto pb-4">
          {storedata.map((e: any) => {
            return (
              <div className="flex flex-col flex-wrap shrink-0 w-[220px] h-[300px] p-4 bg-light bg-opacity-80 items-center justify-center shadow-lg shadow-darker rounded-lg">
                <div className="mb-8 px-6 rounded-full bg-primary">
                  <h3 className="text-lg font-semibold">{e.avatarName}</h3>
                </div>
                <Image src={e.profilePic} alt="" className="w-20 " />
                <div className="flex items-center justify-center my-2 px-2 py-1 bg-dark rounded-full cursor-pointer hover:bg-darker transition duration-200">
                  <BsCoin
                    size={20}
                    className="text-dark bg-gold rounded-full shadow-dark shadow-sm p-1"
                  />
                  {storeItemState(e.id, e.price, e.selected, e.sold)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

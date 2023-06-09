import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCoin } from "react-icons/bs";
import { addStoreData, getStoreData, setProfilePic } from "../firebaseConfig";
import { storeProfileData } from "./ProfileStoreJson";
export default function Store() {
  const [storedata, setstoredata] = useState<any>([{
    id:1,
    avatarName:"",
    price:0,
    profilePic:"",
    selected:false,
    sold:false,
}]);

const mapStorewithdb = (items: { soldStoreItemIDs: any;selectedPicID:any; }) => {
  const picId = items['selectedPicID'];
  const boughtIds = items['soldStoreItemIDs'].map((e:any) => e);
  const mergeData = storeProfileData.map((e) => {
    return (
      {
        id: e.id,
        avatarName: e.avatarName,
        price: e.price,
        profilePic: e.profilePic,
        selected: picId == e.id? true:false,
        sold: (e.id == 1 ? true : !!boughtIds.find((a:any) => a == e.id)),
      }
    );
  });
  return mergeData;
}
  useEffect(()=>{
    getStoreData().then((items)=>{
      const mergeData = mapStorewithdb(items);
      setstoredata(mergeData)
    })
  },[])
  const buttonSetProfile = (id:number)=>{
    setProfilePic(id).then(()=>{
      getStoreData().then((items)=>{
        const mergeData = mapStorewithdb(items);
        setstoredata(mergeData)
      })
    })
    
  }
  const buttonBuy = (id:number,amount:number)=>{
    addStoreData(id,amount).then(()=>getStoreData().then((items)=>{
      const mergeData = mapStorewithdb(items);
      setstoredata(mergeData)
    }))
  }
  const storeItemState = (buttonID:number,price:number = 19,selected:boolean,sold:boolean)=>{
    let buttonState = 1;
    if(selected){
      buttonState = 3;
    }else if(sold){
      buttonState = 2
    }
    if(buttonState == 1){
      return(<h3 onClick={()=>(buttonBuy(buttonID,price))} className="text-md text-gold">{price}</h3>)
    }else if(buttonState == 2){
      return(<h3 onClick={()=>(buttonSetProfile(buttonID))} className="text-md text-gold">Select</h3>)
    }else if (buttonState == 3){
      return(<h3 className="text-md text-gold">Selected</h3>)
    }
    return(<></>)
  }
  return (
    <>
    
      <div className="container bg-light bg-opacity-80 flex flex-wrap mt-4 py-4 rounded-lg gap-2 justify-center">
        <div className="flex text-light text-2xl font-bold w-full justify-center bg-dark rounded-full my-4">
          Toko Avatar
        </div>
        {storedata.map((e:any)=>{
          return(
            <div className="flex flex-col w-full p-4 bg-salmon bg-opacity-80 items-center justify-center shadow-lg shadow-darker rounded-lg">
            <h3 className="text-md">{e.avatarName}</h3>
            <Image src={e.profilePic} alt="" className="w-20 rounded-full" />
            <div className="flex items-center justify-center my-2 px-1 bg-dark rounded-full">
              <BsCoin
                size={20}
                className="text-dark bg-gold rounded-full shadow-dark shadow-sm p-1"
              />
              {storeItemState(e.id,e.price,e.selected,e.sold)}
            </div>
          </div>)
        })}
      </div>
    </>
  );
}

import Image from "next/image";
import { storeProfileData } from "../dashboard/ProfileStoreJson";

export default function Profile({ userData }: any) {
  return (
    <div id="profile" className="w-full">
      {item(userData)}
    </div>
  );
}

function item(data: any) {
  return (
    <>
      {data
        ? data.map((user: any, index: any) => (
            <div className="flex w-full" key={index}>
              <div className="item flex items-center bg-light rounded-lg w-full py-2 mb-2 justify-evenly shadow-lg shadow-dark">
                <div className="flex w-1/3 justify-center">
                  <Image
                    src={
                      storeProfileData.find((e) => e.id == user.pic)!.profilePic
                    }
                    alt={
                      storeProfileData.find((e) => e.id == user.pic)!.avatarName
                    }
                    width={40}
                    height={40}
                    className="rounded-full w-20"
                  />
                </div>
                <div className="flex justify-center w-1/3">
                  <div className="flex-col self-start">
                    <h3 className="text-dark">{user.name}</h3>
                    <span>Lvl.{user.level}</span>
                  </div>
                </div>
                <div className="flex justify-center text-dark w-1/3">
                  {user.score}
                </div>
              </div>
            </div>
          ))
        : ""}
    </>
  );
}

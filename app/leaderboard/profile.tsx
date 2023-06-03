import Image from "next/image";

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
      {data.map((user: any, index: any) => (
        <div className="flex w-full" key={index}>
          <div className="item flex items-center bg-light rounded-lg w-full py-2 mb-2 justify-evenly shadow-lg shadow-dark">
            <Image
              src={user.pic}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full w-20"
            />
            <div className="info">
              <h3 className="text-dark">{user.name}</h3>
              <span>Lvl.xx</span>
            </div>
            <div className="item flex">{user.score}</div>
          </div>
        </div>
      ))}
    </>
  );
}

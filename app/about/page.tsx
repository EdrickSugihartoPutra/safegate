import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container h-screen flex justify-center items-center">
        <div className="w-[90%] h-4/5 bg-teal-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, possimus.
        </div>
      </div>
    </>
  );
}

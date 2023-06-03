import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center bg-leaf mt-28">
        <form
          action="/send-data-here"
          method="post"
          className="flex flex-col justify-center w-1/3 mx-auto py-4"
        >
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" />
          <button
            type="submit"
            className="bg-salmon px-4 py-1 mt-2 w-1/3 rounded-full"
          >
            Submit
          </button>
        </form>
        <div className="flex items-center">
          <p className="text-base text-darker">
            Belum punya akun?{" "}
            <span className="text-gold hover:font-semibold hover:cursor-pointer">
              <Link href="/signup">buat akun disini</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

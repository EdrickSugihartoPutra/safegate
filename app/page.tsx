"use client";
import Link from "next/link";
// import Navbar from "./components/navbar";
import { signIn } from "./firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return alert(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex items-center justify-center">
        <div className="container w-[90%] mx-2 bg-dark flex flex-col items-center justify-center sm:w-1/2 lg:w-1/3 mt-20 p-8 rounded-lg shadow-lg shadow-darker">
          <h2 className="text-3xl font-bold text-light mb-12 ">
            Login Safegate
          </h2>
          <div className="container">
            <form
              onSubmit={handleForm}
              className="flex flex-col bg-dark text-light justify-center w-full mx-auto rounded-lg p-4 gap-2"
            >
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                autoComplete="email"
                className="text-dark px-1 rounded"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                className="text-dark px-1 rounded"
                autoComplete="password"
              />
              <div className="flex flex-col justify-evenly items-center mt-8">
                <button
                  type="submit"
                  className="bg-salmon px-4 py-1 mb-2 w-1/2 rounded-full"
                >
                  Login
                </button>
                <p className="text-xs">
                  Belum punya akun?{" "}
                  <span className="text-gold hover:font-semibold hover:cursor-pointer">
                    <Link href="/signup">buat akun disini</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

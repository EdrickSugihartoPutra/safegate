"use client";
import Link from "next/link";
import Navbar from "./components/navbar";
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
      <Navbar />
      <div className="container flex flex-col items-center bg-dark text-light mt-28">
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center w-1/3 mx-auto py-4"
        >
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <button
            type="submit"
            className="bg-salmon px-4 py-1 mt-2 w-1/3 rounded-full"
          >
            Submit
          </button>
        </form>
        <div className="flex items-center">
          <p className="text-base text-light">
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

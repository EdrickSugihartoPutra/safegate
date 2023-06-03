"use client";
import Link from "next/link";
import { signUp } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDetails, seterrorDetails] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      // seterrorDetails(error);
      return alert(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <>
      <div className="container bg-white flex flex-col items-center justify-center w-1/3 mt-20 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-light bg-dark rounded-full px-4 py-1">
          Daftar Akun Baru
        </h2>
        {errorDetails ? (
          <div className="container bg-salmon text-dark rounded-full w-full py-2 my-2">
            {errorDetails}
          </div>
        ) : (
          ""
        )}

        <form
          onSubmit={handleForm}
          className="flex flex-col bg-dark text-light justify-center w-full mx-auto rounded-lg p-4"
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            className="text-dark px-1"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            autoComplete="off"
            className="text-dark px-1"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            className="text-dark px-1"
          />
          {/* <label for="rep-password">Repeat Password:</label>
          <input
            type="password"
            id="password"
            name="rep-password"
            className="text-dark"
          /> */}
          <div className="flex justify-evenly items-center mt-4">
            <button
              type="submit"
              className="bg-salmon px-4 py-1 w-1/2 rounded-full"
            >
              Submit
            </button>
            <p className="text-xs">
              Sudah punya akun?{" "}
              <span className="text-gold hover:font-semibold hover:cursor-pointer">
                <Link href={"/"}>Login disini</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

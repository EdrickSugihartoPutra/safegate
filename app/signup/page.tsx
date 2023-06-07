"use client";
import Link from "next/link";
import { signUp } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [errorDetails, seterrorDetails] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password,username);

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
      <div className="flex items-center justify-center">
        <div className="container relative w-[90%] mx-2 bg-dark flex flex-col items-center justify-center sm:w-1/2 lg:w-1/3 mt-20 p-8 rounded-lg shadow-lg shadow-darker">
          <h2 className="text-3xl font-bold text-light mb-12">
            Daftar Akun Baru
          </h2>
          {errorDetails ? (
            <div className="container absolute top-16 bg-salmon text-light rounded-full w-2/3 py-2 my-2">
              {errorDetails} test
            </div>
          ) : (
            ""
          )}

          <form
            onSubmit={handleForm}
            className="flex flex-col bg-dark text-light justify-center w-full mx-auto rounded-lg p-4 gap-2"
          >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="text-dark px-1 rounded"
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
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
              autoComplete="password"
              id="password"
              name="password"
              className="text-dark px-1 rounded"
            />
            {/* <label for="rep-password">Repeat Password:</label>
          <input
            type="password"
            id="password"
            name="rep-password"
            className="text-dark"
          /> */}
            <div className="flex flex-col justify-evenly items-center mt-8">
              <button
                type="submit"
                className="bg-salmon px-4 py-1 mb-2 w-1/2 rounded-full"
              >
                Daftar
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
      </div>
    </>
  );
}

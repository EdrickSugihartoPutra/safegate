import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <>
      <div className="container bg-white flex flex-col items-center justify-center w-1/3 mt-20 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-light bg-dark rounded-full px-4 py-1 mb-4">
          Daftar Akun Baru
        </h2>
        <form
          action="/send-data-here"
          method="post"
          className="flex flex-col bg-dark text-light justify-center w-full mx-auto rounded-lg p-4"
        >
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" />
          <label for="rep-password">Repeat Password:</label>
          <input type="text" id="password" name="rep-password" />
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

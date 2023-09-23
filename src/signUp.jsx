import React, { useState } from "react";
import { auth } from "./config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen flex flex-col justify-center h-screen items-center bg-gradient-to-b from-gray-200 to-gray-600">
      <div className="bg-gray-900 rounded-xl h-[500px] w-[400px] flex flex-col items-center   border-2 border-white shadow-xl text-white shadow-gray-400/60">
        <h1 className="mt-10 text-2xl font-bold  text-center">
          Photo{" "}
          <span className="border-l-yellow-600 border-l-[0.4px] text-yellow-100 pl-2">
            {" "}
            Gallery
          </span>
        </h1>
        <form onSubmit={signUp} className="h-52 w-full p-4 space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email..."
            className="inputClass"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password..."
            className="inputClass"
          />
        </form>

        <button
          type="submit"
          onClick={signUp}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 h-[48px] w-[200px]  text-teal-800 font-bold rounded hover:bg-teal-800 hover:text-white mt-0"
        >
          <p>Log in</p>
        </button>
        <p>
          <h3 className="  mt-20 py-5 border-t-orange-400 border-t-[0.4px]  text-sm font-bold text-center">
            Already have an account?{" "}
            <a href="#" className=" hover:text-gray-600 ">
              {" "}
              Log Up
            </a>
          </h3>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

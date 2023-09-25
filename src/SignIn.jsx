import React, { useState } from "react";
import { auth } from "../src/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  let count = 0;

  const signIn = (e) => {
    const message = "invalid user Credential";
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential.user.email) {
          console.log(userCredential.user.email);
          navigateTo("/");
        }
      })
      .catch((error) => {
        if (count === 1) {
          mssg.append(message);
          return;
        }
      });
    count++;
    if (count === 4) {
      navigateTo("/signUp");
    }
  };

  return (
    <div className="w-screen flex flex-col justify-center h-screen items-center bg-gradient-to-b from-gray-200 to-gray-600">
      <div className="bg-gray-900 rounded-xl h-[500px] w-[400px] flex flex-col items-center   border-2 border-white shadow-xl text-white shadow-gray-400/60">
        <h1 className="mt-10 text-2xl font-bold  text-center">
          Sign{" "}
          <span className="border-l-yellow-600 border-l-[0.4px] text-yellow-100 pl-2">
            {" "}
            In
          </span>
        </h1>
        <form onSubmit={signIn} className="h-52 w-full p-4 space-y-4">
          <p id="mssg" className="text-red-600"></p>
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
          onClick={signIn}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 h-[48px] w-[200px]  text-teal-800 font-bold rounded hover:bg-teal-800 hover:text-white mt-0"
        >
          <p>Log in</p>
        </button>
        <p>
          <h3 className="  mt-20 py-5 border-t-orange-400 border-t-[0.4px]  text-sm font-bold text-center">
            Don't have an account?{" "}
            <a href="/signUp" className=" hover:text-gray-600 ">
              {" "}
              signUp
            </a>
          </h3>
        </p>
      </div>
    </div>
  );
};

export default Signup;

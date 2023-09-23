import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out was successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {" "}
      {authUser ? (
        <>
          <p>{`signed in as ${authUser.email}`}</p>
          <button>signOut</button>
        </>
      ) : (
        <p>signed out</p>
      )}{" "}
    </div>
  );
}

export default AuthDetails;

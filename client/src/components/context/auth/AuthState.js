// import React from "react";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../../base";

const AuthState = (props) => {
  const [currentUser, setcurrentUser] = useState(0);

  console.log({ currentUser });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthState;

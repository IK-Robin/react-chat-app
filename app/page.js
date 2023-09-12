'use client'
import Image from "next/image";
import Register from "./[pages]/[home]/register/page";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./[pages]/[home]/page";
export default function App() {
  const {currentUser} =useContext(AuthContext);

  return (
    <>
      {currentUser.user?<Home/>:<Register/>}
    </>
  );
}

'use client'
import Image from "next/image";
import Register from "./[pages]/[home]/register/page";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
export default function App() {
  const {currentUser} =useContext(AuthContext);
  console.log(currentUser)

  return (
    <>
      <Register />
    </>
  );
}

"use client"

import { useEffect, useState } from "react";
import { AuthContext, AuthContextProvider } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

function ContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(0);


        useEffect(() => {
         
       const unsub =  onAuthStateChanged(auth,(user) =>{
            setCurrentUser(1);
            console.log(user)
        })
        return () =>{
            unsub();
        }
        }, []);

  return (
  <AuthContext.Provider  value={{currentUser}}>
    {children}
  </AuthContext.Provider>
  )
}

export default ContextProvider



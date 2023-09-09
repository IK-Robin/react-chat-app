"use client"

import { createContext,useEffect, useState, } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Value } from "sass";
export const AuthContext = createContext();

export  const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(0);


//     useEffect(() => {
     
//    const unsub =  onAuthStateChanged(auth,(user) =>{
//         setCurrentUser(user);
//         console.log(user)
//     })
//     return () =>{
//         unsub();
//     }
//     }, []);

 return(
    <AuthContext.Provider Value={{currentUser}}>
    {children}
</AuthContext.Provider>
 );
}
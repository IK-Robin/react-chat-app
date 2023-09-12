"use client"

import React from 'react'
import style from './navbar.module.scss';
import Image from 'next/image';
import img from '@/assets/robin.jpg'
import Link from 'next/link';
import { auth } from '@/firebase';
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const logout = () =>{

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className={style.navbar} >
      <span className={style.logo}>robin Chat</span>
      <div className={style.user}>
        <Image className={style.profileimg} src={img} alt='robinimg'/>
        <span> robin</span> 
        <br/>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
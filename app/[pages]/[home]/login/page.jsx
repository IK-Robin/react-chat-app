
"use client";
import React from 'react'
import Image from 'next/image'
import cosefile from '@/public/next.svg'
import styles from "../register/register.module.scss"
import Link from 'next/link'
function Login() {
  const logout = async() =>{

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className={styles.fromContainer}>
    <div className={styles.fromWrapper}>
        <span className={styles.logo}>IKR Chat</span>
        <span className={styles.title}>Register</span>
        <form>
           
            <input type="email" placeholder='example@gmail.com' />
            <input type="password" name="" id=" " placeholder='password' />
            
            
            <button type=''> Log IN</button>
        </form>
       <div className={styles.goToLogin}>
       Don&apos;t Have a accoutnt  <Link href={'/register/home'}>
          <span> Sign Up</span>
        </Link>
       </div>
    </div>
</div>
  )
}

export default Login
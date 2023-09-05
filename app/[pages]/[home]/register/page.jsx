import Image from 'next/image'
import React from 'react'
import cosefile from '@/public/next.svg'
import styles from "./register.module.scss"
import Link from 'next/link'
function Register() {
  return (
    <div className={styles.fromContainer}>
        <div className={styles.fromWrapper}>
            <span className={styles.logo}>IKR Chat</span>
            <span className={styles.title}>Register</span>
            <form>
                <input type="text" placeholder='display name' /> 
                <input type="email" placeholder='example@gmail.com' />
                <input type="password" name="" id=" " placeholder='password' />
                
                <input style={{display:'none'}} type="file" name="" id="inputFile" />
                <label htmlFor="inputFile"> 
                    <Image src={cosefile} alt='chose file' width={30} height={30}/> <span> add an image</span>
                </label>
                <button type=''> Sing Up</button>
            </form>
           <div className={styles.goToLogin}>
           Alrady Have a accoutnt  <Link href={'/register/home/login'}>
              <span>login</span>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Register
import React from 'react'
import style from './navbar.module.scss';
import Image from 'next/image';
import img from '@/assets/robin.jpg'
import Link from 'next/link';
function Navbar() {
  return (
    <div className={style.navbar} >
      <span className={style.logo}>robin Chat</span>
      <div className={style.user}>
        <Image className={style.profileimg} src={img} alt='robinimg'/>
        <span> robin</span> 
        <br/>
        <Link href={'/home/login'}>  <button>logout</button></Link>
      </div>
    </div>
  )
}

export default Navbar
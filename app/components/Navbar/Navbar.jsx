import React from 'react'
import style from './navbar.module.scss';
import Image from 'next/image';
function Navbar() {
  return (
    <div className={style.navbar} >
      <span className={style.logo}>robin Chat</span>
      <div className={style.user}>
        <Image src={''} alt='robinimg'/>
        <span> robin</span> 
        <br/>
        <button>  logout</button>
      </div>
    </div>
  )
}

export default Navbar
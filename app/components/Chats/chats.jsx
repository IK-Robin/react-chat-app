import React from 'react'
import style from './chats.module.scss'
import Image from 'next/image'
import img from '@/assets/robin.jpg';
function Chats() {
  return (
<div className={style.userChat}>
<div className={style.userChat}>
    <Image className={style.profileimg} src={img} alt='search people'/>
    <div className={style.userChatInfo}>
      <span>jane</span>
      <p>hello </p>
    </div>
  </div>

</div>
  )
}

export default Chats
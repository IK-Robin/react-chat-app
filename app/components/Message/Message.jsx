import React from 'react'
import style from  './message.module.scss';
import Image from 'next/image';
import img from '@/assets/robin.jpg';
function Message() {
  return (
    <div className={`${style.message} ${style.woner}`}>
      <div className={style.messageInfo}>
      <Image src={img} className={style.profileimg} alt=''/>
      <span>just now</span>
      </div>
      <div className={style.messageContent}>
        <p>hello</p>
        <Image src={img} className={style.profileimg} alt=''/>
      </div>
    </div>
  )
}

export default Message;
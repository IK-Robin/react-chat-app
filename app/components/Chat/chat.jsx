import React from 'react';
import style from '@/style/home.module.scss';
import styleChat from './chat.module.scss';
import Image from 'next/image';
import img from '@/assets/robin.jpg'

import Messages from '../masseges/Messages';
import Input from '../MsgINput/Input';

function Chat() {
  return ( 
    <div className={style.chat}>
     
     <div className={styleChat.chatInfo}>
      <span> Robin</span>
      <div className={styleChat.chatIcon}>
        <Image  className={styleChat.profileimg } src={img} alt='phone'/>
        <Image className={styleChat.profileimg } src={img} alt='video'/>
        <Image  className={styleChat.profileimg }src={img} alt='file'/>
      </div>


     </div>

    <Messages/>
    
     <Input/>
    </div> 
  )
}

export default Chat
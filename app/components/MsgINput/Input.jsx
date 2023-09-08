import Image from 'next/image'
import React from 'react'
import img from '@/assets/robin.jpg';
import style from './input.module.scss'
function Input() {
  return (
<div className={style.inputContainer}>
    <input type="text" placeholder='type somthing'  /> 
    
    <div className={style.send}>
   
      <Image src={img} className={style.profileimg} alt=''/>
      <input type="file"  id="file" style={{display:'none'}} />
      <label htmlFor='file'>
      <Image src={img} className={style.profileimg} alt=''/>
      </label>
     <button> send</button>
    </div>
   </div>
  )
}

export default Input
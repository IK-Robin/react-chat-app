import Image from 'next/image'
import React from 'react'
import img from '@/assets/robin.jpg'
import style from './search.module.scss';
function Search() {
  return (
<div className={style.searchbox}>
  <div className={style.searchForm}>
    <input type="text" placeholder='search a user' />
  </div>

  <div className={style.userChat}>
    <Image className={style.profileimg} src={img} alt='search people'/>
    <div className={style.userChatInfo}>
      <span>jane</span>
    </div>
  </div>
</div>
  )
}

export default Search
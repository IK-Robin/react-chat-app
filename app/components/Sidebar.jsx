import React from 'react'
import style from '@/style/home.module.scss';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Chats from './Chats/chats';
function Sidebar() {
  return (
    <div className={style.sidebar}>
 <Navbar/>
 <Search />
 <Chats/>
 <Chats/>
 <Chats/>
    </div>
  )
}

export default Sidebar
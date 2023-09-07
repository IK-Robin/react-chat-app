import React from 'react'
import style from '@/style/home.module.scss';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
function Sidebar() {
  return (
    <div className={style.sidebar}>
 <Navbar/>
 <Search />
    </div>
  )
}

export default Sidebar
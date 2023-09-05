import React from 'react'
import style from '@/style/home.module.scss';
import Navbar from './Navbar/Navbar';
function Sidebar() {
  return (
    <div className={style.sidebar}>
 <Navbar/>
    </div>
  )
}

export default Sidebar
import React from 'react'
import Register from './register/page'
import style from '@/style/home.module.scss';
import Sidebar from '@/app/components/Sidebar';
import Chat from '@/app/components/Chat/chat';


function Home() {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <Sidebar />
        <Chat />
      </div> 
    </div>
  )
}

export default Home  
import React from 'react'
import style from './messages.module.scss'
import Message from '../Message/Message'
function Messages() {
  return(
    <div className={style.messages}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages
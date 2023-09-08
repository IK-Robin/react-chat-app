import Image from 'next/image'
import React from 'react'

import style from './search.module.scss';
function Search() {
  return (
<div className={style.searchbox}>
  <div className={style.searchForm}>
    <input type="text" placeholder='search a user' />
  </div>

  
</div>
  )
}

export default Search
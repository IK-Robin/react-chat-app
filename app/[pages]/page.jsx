import Link from 'next/link';
import React from 'react';

function Pages() {
  return (
    <div> 

       <Link href={'/register/home'}>
          <span> Sign Up</span>
        </Link> </div>
  )
}

export default Pages
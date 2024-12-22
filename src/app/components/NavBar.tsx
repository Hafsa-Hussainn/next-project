import React from 'react'
import Link from 'next/link';



export default function NavBar() {
  return (
    <div className='flex justify-center items-center gap-[4rem] ' >
      

      <Link href="/">Home</Link>
      <Link href="/Service">Service</Link>
      <Link href="../About">About</Link>
      <Link href="./Contact" >Contact</Link>
      

    </div>
  )
}

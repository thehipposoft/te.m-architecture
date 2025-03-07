import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex justify-between items-center md:w-[1200px] mx-auto py-1'>
        <Link href={'/'}>
          <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={500} height={500} className='w-24 h-24'/>
        </Link>
        <div className='flex justify-between gap-24'>
            <Nav />
            <Link href={'/'} className='font-bold'>ES</Link>
        </div>
    </div>
  )
}

export default Header
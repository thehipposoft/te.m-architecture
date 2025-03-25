import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='flex fixed md:relative z-40 bg-white w-screen mx-auto'>
      <div className='flex w-[85vw] md:w-[1200px] justify-between items-center mx-auto'>
        <Link href={'/'}>
            <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={500} height={500} className='md:w-24 w-20 md:h-24 h-20 py-2 md:py-0'/>
          </Link>
          <MobileMenu />
          <div className='md:flex hidden justify-between gap-24'>
              <Nav />
          </div>
      </div>
    </div>
  )
}

export default Header
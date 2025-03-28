import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='flex fixed md:relative z-40 bg-white w-screen mx-auto'>
      <div className='flex w-[85vw] justify-between items-center mx-auto'>
        <Link href={'/'}>
            <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={160} height={186} className='md:w-[75px] w-[65px] md:h-[85px] h-[75px] md:py-2 py-3 '/>
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
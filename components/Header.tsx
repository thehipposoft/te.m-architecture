import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='flex fixed z-40 bg-white w-screen mx-auto' id='header-nav'>
      <div className='flex w-[85vw] 2xl:w-[1300px]  justify-between items-center mx-auto'>
        <Link href={'/'}>
            <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={160} height={186} className='md:w-[70px] w-[65px] md:h-[80px] h-[75px] md:py-1 py-3 '/>
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
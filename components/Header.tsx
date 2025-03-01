import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center md:w-[1200px] mx-auto py-1'>
        <Link href={'/'}>
          <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={500} height={500} className='w-24 h-24'/>
        </Link>
        <div className='flex justify-between gap-24'>
            <nav className='flex gap-8 font-light'>
                <Link href={'/'} className='uppercase px-2 text-xs tracking-widest'>projects</Link>
                <Link href={'/#services'} className='uppercase px-2 text-xs tracking-widest'>services</Link>
                <Link href={'#about'} className='uppercase px-2 text-xs tracking-widest'>about</Link>
                <Link href={'#contact'} className='uppercase px-2 text-xs tracking-widest'>contact</Link>
            </nav>
            <Link href={'/'} className='font-bold'>ES</Link>
        </div>
    </div>
  )
}

export default Header
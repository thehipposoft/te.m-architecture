'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Nav = () => {

    const currentPath = usePathname()
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(container.current,
            {
                opacity: 0,
                y: -100,
                ease: 'power2.out',
                duration: 1,
             });
    },{ scope: container });

  return (
    <nav ref={container} className='flex gap-8 font-light'>
        <Link 
            href={'/projects'}
            className={`uppercase px-2 text-xs relative tracking-widest h-fit overflow-hidden
                ${currentPath.includes('project') ? 'after:-left-0 before:left-0' : 'hover:after:left-0 hover:before:left-0 '}
                after:duration-700 after:content-[''] after:absolute  after:bg-black after:h-[1px] after:w-full after:-left-full hover:after:left-0
                before:duration-700 before:content-[''] before:bottom-0 before:absolute before:bg-black before:h-[1px] before:w-full before:-left-full hover:before:left-0 `}
        >
            projects</Link>
        <Link 
            href={'/#services'}
            className={`uppercase px-2 text-xs relative tracking-widest h-fit overflow-hidden
                ${currentPath.includes('services') ? 'after:-left-0 before:left-0' : 'hover:after:left-0 hover:before:left-0 '}
                after:duration-700 after:content-[''] after:absolute  after:bg-black after:h-[1px] after:w-full after:-left-full hover:after:left-0
                before:duration-700 before:content-[''] before:bottom-0 before:absolute before:bg-black before:h-[1px] before:w-full before:-left-full hover:before:left-0 `}
        >
            services
        </Link>
        <Link 
            href={'/about'}
            className={`uppercase px-2 text-xs relative tracking-widest h-fit overflow-hidden
                after:duration-700 after:content-[''] after:absolute  after:bg-black after:h-[1px] after:w-full after:-left-full hover:after:left-0
                before:duration-700 before:content-[''] before:bottom-0 before:absolute before:bg-black before:h-[1px] before:w-full before:-left-full hover:before:left-0 `}
        >
        about
        </Link>
        <Link 
            href={'/#contact'}
            className={`uppercase px-2 text-xs relative tracking-widest h-fit overflow-hidden
                after:duration-700 after:content-[''] after:absolute  after:bg-black after:h-[1px] after:w-full after:-left-full hover:after:left-0
                before:duration-700 before:content-[''] before:bottom-0 before:absolute before:bg-black before:h-[1px] before:w-full before:-left-full hover:before:left-0 `}
        >
        contact
        </Link>
    </nav>
  )
}

export default Nav
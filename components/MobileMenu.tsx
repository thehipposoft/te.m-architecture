'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const MobileMenu = () => {

    const [isToggle, setToggleMenu] = useState(false);

    function toggleMenu() {
        setToggleMenu(!isToggle)
    }

    return (
        <div className='md:hidden '>
            <button
                onClick={toggleMenu}
                className='relative w-12 border border-[#87807040] rounded-md right-0 top-0 z-40 bg-[#FBFBFB] py-2'
            >
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path fill="none" d="M0 0h48v48H0z" data-name="invisible box"/><g data-name="icons Q2"><path d="M42 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2h32a2 2 0 0 1 2 2ZM42 24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2h32a2 2 0 0 1 2 2ZM42 36a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Z"/></g></g></svg>
            </button>
            <div className={`${isToggle ? 'left-0' : 'left-full'} flex justify-center items-center  bg-[#FFFFFF] duration-500 absolute w-screen h-screen top-0 left-0`}>
                    <div className='flex flex-col justify-center items-center py-20 gap-12 w-[75vw] border border-solid border-[#DDDDDD] rounded-tr-[50px]'>
                        <Link href={'/#projects'} className='border-b sm:p-2 text-2xl' onMouseUp={toggleMenu} >
                            Projects
                        </Link>
                        <Link href={'/about'} className='border-b sm:p-2 text-2xl' onMouseUp={toggleMenu}>
                            About
                        </Link>
                        <Link href={'/#services'} className='border-b sm:p-2 text-2xl' onMouseUp={toggleMenu}>
                            Services
                        </Link>
                        <Link href={'/#contact'} className='border-b sm:p-2 text-2xl' onMouseUp={toggleMenu}>
                            Contact
                        </Link>
                        <Image src={'/assets/images/logo.png'} alt='te.m Logo' width={500} height={500} className='w-28 h-28'/>
                    </div>
            </div>
        </div>
    );
};

export default MobileMenu;
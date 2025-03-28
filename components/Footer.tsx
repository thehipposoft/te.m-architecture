import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='md:h-[415px] hidden bg-[#c4c4c4] md:flex items-center'>
        <div className='flex justify-between md:w-[1100px] mx-auto gap-8'>
            <Image src={'/assets/images/logo-white.png'} alt='' width={160} height={186} className='md:w-[140px] w-[70px] md:h-[155px] h-[75px] pt-12' />
            <div className='flex flex-col gap-5'>
              <h5 className='text-white roboto font-extrabold text-base'>Information</h5>
              <ul className=' flex flex-col gap-6 text-white list-none roboto p-0'>
                <li className='text-sm'>Main</li>
                <li className='text-sm'>Gallery</li>
                <li className='text-sm'>Projects</li>
                <li className='text-sm'>Certifications</li>
                <li className='text-sm'>Contact</li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='text-white roboto font-extrabold text-base'>Contacts</h5>
              <ul className=' flex flex-col gap-6 text-white p-0'>
                <div className='flex gap-6'>
                  <svg width="11" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.508 9.25.005.007L5.5 15.112l3.987-5.855.005-.008.005-.007c.74-1.002 1.075-2.363.99-3.72C10.402 4.167 9.9 2.87 9.033 1.99a4.936 4.936 0 0 0-7.066 0l-.459 7.26Zm0 0-.005-.008m.005.007-.005-.007m0 0C.763 8.24.428 6.879.513 5.522m.99 3.72-.99-3.72m0 0C.598 4.167 1.1 2.87 1.967 1.99L.513 5.523Zm2.725.016c0 1.288 1.029 2.347 2.316 2.347 1.286 0 2.315-1.059 2.315-2.347S6.84 3.192 5.554 3.192c-1.287 0-2.316 1.058-2.316 2.346Z" stroke="#fff"/></svg>
                  <div className='flex flex-col gap-4'>
                    <p className='text-white m-0 text-sm roboto'>Argentina</p>
                    <p className='text-white m-0 text-sm roboto'>Australia</p>
                    <p className='text-white m-0 text-sm roboto'>Spain</p>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.15 15.197.01-.01 2.252-2.236c.082-.082.105-.15.097-.241-.016-.06-.058-.132-.19-.215l-3.148-1.86h-.019l-.118-.07c-.008-.005-.06-.031-.2-.031a.537.537 0 0 0-.37.135l-.952.97-.003.003a.772.772 0 0 1-.306.18.868.868 0 0 1-.268.05h-.05l-.048-.009-.212-.042c-.213-.043-.467-.152-.74-.291a8.3 8.3 0 0 1-1.058-.677c-.425-.31-.897-.733-1.415-1.262-.53-.518-.95-.988-1.255-1.408-.289-.399-.515-.753-.668-1.058a3.545 3.545 0 0 1-.35-.947l-.01-.046v-.047c0-.11.027-.21.052-.285a.773.773 0 0 1 .18-.306l.83-.83a.557.557 0 0 0 .153-.292.327.327 0 0 0-.031-.246l-.007-.011L3.503.694a.672.672 0 0 0-.156-.168.134.134 0 0 0-.09-.027c-.057 0-.114.016-.189.09L.814 2.846l-.01.01-.01.008a.775.775 0 0 0-.171.244 1.174 1.174 0 0 0-.104.312l-.017.32c-.008.151.008.39.062.733.052.323.151.72.305 1.197.147.457.371.978.679 1.565.302.578.705 1.214 1.215 1.912.5.685 1.136 1.41 1.913 2.176l.004.004c.978.989 1.888 1.755 2.732 2.306.865.566 1.625.98 2.282 1.254.676.28 1.222.445 1.647.51.479.073.793.104.967.104.082 0 .137-.003.17-.006l.671-.297Zm0 0-.01.01a.775.775 0 0 1-.244.173c-.117.056-.222.09-.318.105l-.095.008h-.004l.67-.296Z" stroke="#fff"/></svg>
                    <p className='text-white roboto text-sm'>+39 342 326 5740</p>
                </div>
                <div className='flex items-center gap-6'>
                  <svg width="16" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.14 6.162-.005.003a.204.204 0 0 1-.111.032H8.02a.193.193 0 0 1-.117-.033h-.001L1.1.4h13.836L8.45 5.903l-.286.242-.025.017Zm1.895.327L15.01 10.6H.984L5.97 6.459l.993.842h.001c.293.247.67.377 1.057.377.388 0 .765-.131 1.058-.378v-.001l.955-.81ZM4.83 5.492.4 9.17V1.738l4.43 3.754ZM15.6 1.769v7.407L11.177 5.52 15.6 1.77Z" stroke="#fff" strokeWidth=".8"/></svg>
                  <p className='text-white roboto text-sm'>info@temarqui.com</p>
                </div>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='text-white roboto font-extrabold text-base roboto'>Social Media</h5>
 
            </div>
        </div>

    </div>
  )
}

export default Footer
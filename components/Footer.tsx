import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#c4c4c4] flex flex-col justify-between'>
        <div className='flex md:flex-row flex-col items-center md:items-start justify-between md:w-[1100px] w-[85vw] mx-auto gap-8 pt-4'>
            <Image src={'/assets/images/logo-white.png'} alt='' width={160} height={186} className='w-[140px] h-[155px] pt-12' />
            <div className='flex md:gap-40 gap-16 flex-wrap justify-center md:justify-start py-8'>
              <div className='flex flex-col gap-5'>
                <h5 className='text-white  font-extrabold text-base'>Information</h5>
                <ul className=' flex flex-col gap-6 text-white list-none  p-0'>
                  <Link href={'/'} className='text-sm text-white hover:underline'>Main</Link>
                  <Link href={'/gallery'} className='text-sm text-white hover:underline'>Gallery</Link>
                  <Link href={'/projects'} className='text-sm text-white hover:underline'>Projects</Link>
                  <Link href={'/#services'} className='text-sm text-white hover:underline'>Services</Link>
                  <Link href={'/#contact'} className='text-sm text-white hover:underline'>Contact</Link>
                </ul>
              </div>
              <div className='flex flex-col gap-5'>
                <h5 className='text-white  font-extrabold text-base'>Contacts</h5>
                <ul className=' flex flex-col gap-6 text-white p-0'>
                  <div className='flex gap-6'>
                    <svg width="11" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.508 9.25.005.007L5.5 15.112l3.987-5.855.005-.008.005-.007c.74-1.002 1.075-2.363.99-3.72C10.402 4.167 9.9 2.87 9.033 1.99a4.936 4.936 0 0 0-7.066 0l-.459 7.26Zm0 0-.005-.008m.005.007-.005-.007m0 0C.763 8.24.428 6.879.513 5.522m.99 3.72-.99-3.72m0 0C.598 4.167 1.1 2.87 1.967 1.99L.513 5.523Zm2.725.016c0 1.288 1.029 2.347 2.316 2.347 1.286 0 2.315-1.059 2.315-2.347S6.84 3.192 5.554 3.192c-1.287 0-2.316 1.058-2.316 2.346Z" stroke="#fff"/></svg>
                    <div className='flex flex-col gap-4'>
                      <p className='text-white m-0 text-sm'>Argentina</p>
                      <p className='text-white m-0 text-sm'>Australia</p>
                      <p className='text-white m-0 text-sm'>Spain</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-6'>
                      <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.15 15.197.01-.01 2.252-2.236c.082-.082.105-.15.097-.241-.016-.06-.058-.132-.19-.215l-3.148-1.86h-.019l-.118-.07c-.008-.005-.06-.031-.2-.031a.537.537 0 0 0-.37.135l-.952.97-.003.003a.772.772 0 0 1-.306.18.868.868 0 0 1-.268.05h-.05l-.048-.009-.212-.042c-.213-.043-.467-.152-.74-.291a8.3 8.3 0 0 1-1.058-.677c-.425-.31-.897-.733-1.415-1.262-.53-.518-.95-.988-1.255-1.408-.289-.399-.515-.753-.668-1.058a3.545 3.545 0 0 1-.35-.947l-.01-.046v-.047c0-.11.027-.21.052-.285a.773.773 0 0 1 .18-.306l.83-.83a.557.557 0 0 0 .153-.292.327.327 0 0 0-.031-.246l-.007-.011L3.503.694a.672.672 0 0 0-.156-.168.134.134 0 0 0-.09-.027c-.057 0-.114.016-.189.09L.814 2.846l-.01.01-.01.008a.775.775 0 0 0-.171.244 1.174 1.174 0 0 0-.104.312l-.017.32c-.008.151.008.39.062.733.052.323.151.72.305 1.197.147.457.371.978.679 1.565.302.578.705 1.214 1.215 1.912.5.685 1.136 1.41 1.913 2.176l.004.004c.978.989 1.888 1.755 2.732 2.306.865.566 1.625.98 2.282 1.254.676.28 1.222.445 1.647.51.479.073.793.104.967.104.082 0 .137-.003.17-.006l.671-.297Zm0 0-.01.01a.775.775 0 0 1-.244.173c-.117.056-.222.09-.318.105l-.095.008h-.004l.67-.296Z" stroke="#fff"/></svg>
                      <Link href={'tel:+393423265740'} className='text-white text-sm hover:underline'>+39 342 326 5740</Link>
                  </div>
                  <div className='flex items-center gap-6'>
                    <svg width="16" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.14 6.162-.005.003a.204.204 0 0 1-.111.032H8.02a.193.193 0 0 1-.117-.033h-.001L1.1.4h13.836L8.45 5.903l-.286.242-.025.017Zm1.895.327L15.01 10.6H.984L5.97 6.459l.993.842h.001c.293.247.67.377 1.057.377.388 0 .765-.131 1.058-.378v-.001l.955-.81ZM4.83 5.492.4 9.17V1.738l4.43 3.754ZM15.6 1.769v7.407L11.177 5.52 15.6 1.77Z" stroke="#fff" strokeWidth=".8"/></svg>
                    <Link href={'mailto:info@temarqui.com'} className='text-white text-sm hover:underline'>info@temarqui.com</Link>
                  </div>
                </ul>
              </div>
              <div className='flex flex-col gap-8'>
                <h5 className='text-white  font-extrabold text-base '>Social Media</h5>
                <div className='flex gap-8'>
                  <Link href={''}><svg width="10" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.13701 18.9929h-4.091V9.49891H.001007v-3.273H2.04601v-1.964c0-2.669 1.155-4.2580038 4.433-4.2580038h2.73V3.27691h-1.705c-1.278 0-1.362.458-1.362 1.312l-.005 1.637h3.092l-.362 3.273h-2.73v9.49399Z" fill="#fff"/></svg></Link>
                  <Link href={''}><svg width="21" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.008 1.89598c-.773.322-1.604.537-2.475.635.89-.5 1.573-1.292 1.895-2.234003-.834.462-1.756.798003-2.738.980003C16.905.490977 15.784.0009766 14.545.0009766c-2.38 0-4.311 1.8090034-4.311 4.0390034 0 .317.038.626.112.921-3.582-.169-6.758-1.777-8.884-4.220003C1.091 1.33798.879 2.03098.879 2.77198c0 1.4.761 2.638 1.917 3.362-.706-.022-1.37-.203-1.952-.506v.052c0 1.957 1.485 3.589 3.457 3.96-.361.092-.743.14-1.135.14-.278 0-.548-.024-.811-.07.548 1.60302 2.14 2.77202 4.026 2.80502-1.475 1.083-3.333 1.728-5.353 1.728-.348 0-.691-.019-1.028-.056 1.907 1.145 4.173 1.815 6.607 1.815 7.928 0 12.263-6.15602 12.263-11.49302 0-.176-.005-.349-.013-.523.842-.57 1.573-1.281 2.151-2.09Z" fill="#fff"/></svg></Link>
                  <Link href={'https://www.linkedin.com/company/te-m/'} target='_blank'><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M18.512 19.0132H1.48799c-.816004 0-1.4770037-.579-1.4770037-1.293V2.28223c0-.713.6609997-1.291996 1.4770037-1.291996H18.512c.815 0 1.476.578996 1.476 1.291996V17.7202c0 .714-.661 1.293-1.476 1.293Zm-15.03901-2.969h2.942V7.90723h-2.942v8.13697Zm1.491-12.05897c-1.007 0-1.664.607-1.664 1.406 0 .78.638 1.406 1.625 1.406h.019c1.026 0 1.664-.626 1.664-1.406-.018-.799-.638-1.406-1.644-1.406ZM17.023 11.3792c0-2.49997-1.452-3.66297-3.387-3.66297-1.562 0-2.26.789-2.651 1.344v-1.153H8.04299c.039.764 0 8.13697 0 8.13697H10.985v-4.544c0-.242.019-.486.097-.659.212-.486.697-.98897 1.509-.98897 1.065 0 1.49.74597 1.49 1.83997v4.352h2.942v-4.665Zm-6.058-2.29197c.006-.009.014-.018.02-.027v.027h-.02Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg></Link>
                  <Link href={''}><svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.42401 0C2.48901 0 .001007 3.522.001007 6.46c0 1.778.676 3.36 2.127003 3.95.238.097.451.003.52-.259.048-.181.162-.639.212-.83.07-.259.043-.35-.149-.576-.419-.491-.686-1.127-.686-2.028 0-2.613 1.964-4.952 5.114-4.952 2.789 0 4.32099 1.697 4.32099 3.962 0 2.982-1.325 5.498-3.29299 5.498-1.086 0-1.899-.895-1.639-1.992.313-1.309.917-2.723.917-3.669 0-.846-.456-1.552-1.401-1.552-1.11 0-2.002 1.144-2.002 2.676 0 .977.331 1.637.331 1.637s-1.137 4.794-1.336 5.634c-.397 1.672-.059 3.722-.031 3.93.017.122.175.151.247.059.102-.134 1.425-1.759 1.875-3.384.127-.46.73-2.842.73-2.842.361.685 1.416 1.289 2.537 1.289 3.33899 0 5.60399-3.031 5.60399-7.087C13.999 2.857 11.39 0 7.42401 0Z" fill="#fff"/></svg></Link>
                </div>
              </div>
            </div>
        </div>
        <div className='flex justify-center pb-5 pt-8'>
            <Link href={'/'} className='text-white hover:underline'>Created by <span>HippoSoft</span> | All rights reserved</Link>
        </div>
    </div>
  )
}

export default Footer
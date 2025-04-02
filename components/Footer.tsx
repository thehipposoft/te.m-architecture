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
                  <Link href={''}>
                      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path fillRule="evenodd" clipRule="evenodd" d="M12 18c3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6Zm0-2c2.2091 0 4-1.7909 4-4 0-2.20914-1.7909-4-4-4-2.20914 0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4Z"/><path d="M18 5c-.5523 0-1 .44772-1 1s.4477 1 1 1 1-.44772 1-1-.4477-1-1-1Z"/><path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6v2.8c0 3.3603 0 5.0405.65396 6.3239.57524 1.129 1.49312 2.0469 2.6221 2.6221C5.55953 23 7.23969 23 10.6 23h2.8c3.3603 0 5.0405 0 6.3239-.654 1.129-.5752 2.0469-1.4931 2.6221-2.6221C23 18.4405 23 16.7603 23 13.4v-2.8c0-3.36031 0-5.04047-.654-6.32394-.5752-1.12898-1.4931-2.04686-2.6221-2.6221C18.4405 1 16.7603 1 13.4 1h-2.8c-3.36031 0-5.04047 0-6.32394.65396-1.12898.57524-2.04686 1.49312-2.6221 2.6221ZM13.4 3h-2.8c-1.71316 0-2.87775.00156-3.77792.0751-.87684.07164-1.32524.20149-1.63804.36087-.75265.3835-1.36457.99542-1.74807 1.74807-.15938.3128-.28923.7612-.36087 1.63804C3.00156 7.72225 3 8.88684 3 10.6v2.8c0 1.7132.00156 2.8777.0751 3.7779.07164.8769.20149 1.3253.36087 1.6381.3835.7526.99542 1.3645 1.74807 1.748.3128.1594.7612.2893 1.63804.3609C7.72225 20.9984 8.88684 21 10.6 21h2.8c1.7132 0 2.8777-.0016 3.7779-.0751.8769-.0716 1.3253-.2015 1.6381-.3609.7526-.3835 1.3645-.9954 1.748-1.748.1594-.3128.2893-.7612.3609-1.6381.0735-.9002.0751-2.0647.0751-3.7779v-2.8c0-1.71316-.0016-2.87775-.0751-3.77792-.0716-.87684-.2015-1.32524-.3609-1.63804-.3835-.75265-.9954-1.36457-1.748-1.74807-.3128-.15938-.7612-.28923-1.6381-.36087C16.2777 3.00156 15.1132 3 13.4 3Z"/></g></svg>
                    </Link>
                  <Link href={'https://www.linkedin.com/company/te-m/'} target='_blank'>
                      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 3.47059V20.5294c0 .39-.1549.7641-.4307 1.0399-.2758.2758-.6499.4307-1.0399.4307H3.47059c-.39003 0-.76408-.1549-1.03986-.4307C2.15494 21.2935 2 20.9194 2 20.5294V3.47059c0-.39003.15494-.76408.43073-1.03986C2.70651 2.15494 3.08056 2 3.47059 2H20.5294c.39 0 .7641.15494 1.0399.43073.2758.27578.4307.64983.4307 1.03986ZM7.88235 9.64706H4.94118v9.41174h2.94117V9.64706Zm.26471-3.23529c.00155-.22248-.04074-.44308-.12445-.64922-.0837-.20613-.20719-.39376-.36342-.55216-.15622-.15841-.34211-.2845-.54706-.37106-.20495-.08656-.42495-.13191-.64742-.13345h-.05294c-.45243 0-.88633.17973-1.20625.49964-.31991.31992-.49964.75382-.49964 1.20625 0 .45242.17973.88632.49964 1.20624.31992.31991.75382.49964 1.20625.49964.22249.00547.44388-.03295.65151-.11307.20764-.08011.39746-.20036.55861-.35386.16115-.1535.29048-.33726.38059-.54076.09011-.2035.13924-.42276.14458-.64525v-.05294ZM19.0588 13.3412c0-2.8294-1.8-3.92943-3.5882-3.92943-.5855-.02932-1.1685.09538-1.6907.36168-.5223.26625-.9656.66485-1.2858 1.15595h-.0823V9.64706H9.64706v9.41174h2.94114v-5.0059c-.0425-.5126.119-1.0214.4494-1.4157.3305-.3943.8031-.6423 1.3153-.6901h.1118c.9353 0 1.6294.5882 1.6294 2.0705v5.0412h2.9412l.0235-5.7176Z" fill="#fff"/></svg>
                  </Link>
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
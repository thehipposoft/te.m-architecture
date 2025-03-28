'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import LightBox from './LightBox'

type Images = {
  src: string,
  alt: string,
}

type GalleryCardTypes = {
    width?: string,
    height?: string,
    title?: string,
    titleColor: string,
    expandColor: string,
    imageSrc: string,
    imageAlt: string,
    rounded?: boolean,
    absolute?: boolean,
    customClass?: string,
    gallery: Images[]
}

const GalleryCard = ({width, height, title, titleColor, expandColor, imageSrc, imageAlt, rounded, absolute, gallery, customClass}:GalleryCardTypes) => {


  const [openGallery, setOpenGallery] = useState(false);

  const toggleGallery = () => {
      setOpenGallery(!openGallery)
  }


  return (
    <div>
      <div style={{width: width, height: height}} className={` ${absolute ? 'absolute' : 'relative'} ${customClass}  group flex items-end  cursor-pointer`} onClick={toggleGallery}>
          <Image src={imageSrc} alt={imageAlt} fill className={`${rounded ? 'rounded-tr-[55px]' : ''} object-cover `} />
          <svg className='absolute z-10 right-12 top-10' width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.365.424h-3.91c-.54 0-.977.419-.977.935s.437.935.977.935h1.788l-3.456 3.307a.906.906 0 0 0 0 1.322c.19.183.44.274.691.274.25 0 .5-.091.691-.274l3.218-3.08V5.1c0 .516.437.935.978.935.54 0 .977-.42.977-.935V1.359c0-.516-.437-.935-.977-.935ZM17.365 11.646c-.54 0-.978.419-.978.935v1.483l-3.218-3.08c-.382-.365-1-.365-1.382 0a.906.906 0 0 0 0 1.323l3.218 3.08h-1.55c-.54 0-.977.419-.977.935s.437.935.977.935h3.91c.54 0 .977-.419.977-.935v-3.74c0-.517-.437-.936-.977-.936ZM4.087 2.294h1.55c.54 0 .977-.419.977-.935S6.177.424 5.637.424h-3.91c-.127 0-.254.025-.373.072a.954.954 0 0 0-.529.506.91.91 0 0 0-.075.357v3.74c0 .517.437.936.977.936s.978-.42.978-.935V3.617L6.16 6.923c.19.183.44.274.69.274.25 0 .5-.091.691-.274a.906.906 0 0 0 0-1.322L4.087 2.294ZM6.16 10.985 2.705 14.29v-1.71c0-.516-.437-.935-.978-.935-.54 0-.977.419-.977.935v3.74c0 .517.437.936.977.936h3.91c.54 0 .977-.419.977-.935s-.437-.935-.977-.935H4.323l3.218-3.08a.906.906 0 0 0 0-1.322c-.382-.366-1-.366-1.381 0Z" fill={expandColor}/></svg>
          <div className={`${titleColor === '#FFFFFF' ? 'bg-black/30' : 'bg-white/30'} flex w-fit z-10 ml-6 mb-4 rounded-xl px-2 py-1 md:mr-20`}>
            <h2 style={{color: titleColor}} className='relative z-10 md:max-w-[380px] text-base duration-300 '>{title}</h2>
          </div>
      </div>
      <LightBox projectImages={gallery} isGalleryOpen={openGallery} closeGallery={toggleGallery} />
    </div>
  )
}

export default GalleryCard
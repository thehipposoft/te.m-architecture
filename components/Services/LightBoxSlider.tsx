'use client'
import React, {useState} from 'react';
import Image from 'next/image';

const LightBoxSlider = ({projectImages}:any) => {

    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === projectImages.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return projectImages.length - 1;
            return index - 1;
        })
    }

    return (
        <div className=''>
            <div className={'md:relative w-screen z-10'}>
                <div className="flex items-center md:max-w-[1300px] md:max-h-[95vh] max-h-[65vh] overflow-hidden mx-auto">
                    {
                        projectImages.map((val:any, index:any) => (
                            <div
                                key={index}
                                className='duration-500 ease-in-out relative xl:min-w-[1300px] w-screen xl:w-auto flex justify-center items-center'
                                style={{
                                    translate: `${-100 * imageIndex}%`,
                                }}
                                onClick={showNextImage}
                            >
                                <Image
                                    className='xl:object-cover object-contain xl:w-[1300px] w-screen'
                                    src={val.full_image_url || val.src}
                                    alt={val.alt || val.alt_text}
                                    key={index}
                                    width={1100}
                                    height={650}
                                    sizes='90vw'
                                />
                            </div>

                        ))
                    }
                </div>
                <button
                    className={`${imageIndex === 0 ? 'hidden' : ''} flex justify-center items-center border-none absolute xl:top-[50%] md:bottom-0 bottom-[10%] md:left-[7%] left-[8%] cursor-pointer text-white duration-500 p-2 rounded-full w-9 h-9 shadow-xl bg-[#c4c4c4]`}
                    onClick={showPrevImage}
                >   
                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.6 11.833a.983.983 0 0 0 .586-.196c.173-.128.308-.31.388-.523.08-.213.1-.447.06-.673a1.208 1.208 0 0 0-.289-.597L2.876 6.007l3.47-3.837c.1-.108.18-.236.235-.378A1.272 1.272 0 0 0 6.59.89a1.181 1.181 0 0 0-.23-.383 1.053 1.053 0 0 0-.347-.255.966.966 0 0 0-.814.008c-.129.061-.245.15-.342.261L.642 5.183a1.23 1.23 0 0 0-.308.824c0 .309.11.605.308.824l4.214 4.66c.197.22.465.342.745.342Z" fill="#fff"/></svg>                </button>
                <button
                    className="absolute border-none flex justify-center items-center xl:top-[50%] md:bottom-0 bottom-[10%] md:right-[6%] right-[8%] cursor-pointer text-white duration-500 p-2 rounded-full w-9 h-9 shadow-xl bg-[#c4c4c4]"
                    onClick={showNextImage}
                >
                    <svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.4 11.833a.983.983 0 0 1-.586-.196 1.148 1.148 0 0 1-.388-.523 1.28 1.28 0 0 1-.06-.673c.041-.226.141-.434.289-.597l3.469-3.837L.654 2.17c-.1-.108-.18-.236-.235-.378A1.272 1.272 0 0 1 .41.89C.464.747.543.617.641.508c.1-.11.217-.196.347-.255a.966.966 0 0 1 .814.008c.129.061.245.15.342.261l4.214 4.661c.197.219.308.515.308.824 0 .309-.11.605-.308.824l-4.214 4.66a1.005 1.005 0 0 1-.745.342Z" fill="#fff"/></svg>
                </button>
            <p className='text-white text-center'><strong>{`${imageIndex + 1}`}</strong> | {projectImages.length}</p>
            </div>
        </div>
    );
};

export default LightBoxSlider;
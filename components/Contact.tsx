import Image from 'next/image'
import React from 'react'
import { Form } from './Form'

const Contact = () => {
  return (
    <div className='lg:h-screen h-screen md:h-full flex justify-center items-center lg:rounded-tr-[250px] relative ' id='contact'>
      <Image 
        src={'/assets/images/projects/silu-wasi/7.jpg'} 
        alt='Contact section background: Silu Wasi project' 
        fill
        sizes='100vw'
        className='object-cover md:object-fill lg:rounded-tr-[250px]'
       />
      <div className='absolute top-0 left-0 w-full h-full md:rounded-tr-[250px] bg-black/30 z-10' />
      <div className='relative z-20 flex lg:flex-row flex-col md:w-[1130px] md:py-8 lg:py-0 mx-auto items-center justify-between'>
        <p  className='md:text-6xl text-5xl text-white'>Contact Us</p>
        <div>
          <Form
              fields={[
                  {
                      name: 'name',
                      type: 'text',
                      label: '',
                      placeholder: 'Name',
                      required: true,
                  },
                  {
                      name: 'phoneNumber',
                      type: 'tel',
                      label: '',
                      placeholder: 'Phone Number*',
                      required: true,
                  },
                  {
                      name: 'customerEmail',
                      type: 'email',
                      label: '',
                      placeholder: 'Email*',
                      required: true,
                  },
                  {
                      name: 'interest',
                      type: 'text',
                      label: '',
                      placeholder: 'Interested In',
                  },
                  {
                      name: 'message',
                      type: 'textArea',
                      label: '',
                      placeholder: 'Message*',
                      required: true,
                  },
              ]}
              onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
              onErrorMessage={'Please, try again in some minutes'}
              submitButtonLabel={'SEND EMAIL'}
              emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/tem-architecture-email'}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
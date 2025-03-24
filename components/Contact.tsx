import Image from 'next/image'
import React from 'react'
import { Form } from './Form'

const Contact = () => {
  return (
    <div className='h-screen flex justify-center items-center rounded-tr-[300px] relative ' id='contact'>
      <Image src={'/assets/images/contact.png'} alt='' fill className='object-cover md:object-fill' />
      <div className='relative z-20 flex md:flex-row flex-col md:w-[1130px] mx-auto items-center justify-between'>
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
                      required: true,
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
              emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/conrad-architect-email'}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
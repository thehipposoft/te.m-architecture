import Image from 'next/image'
import React from 'react'
import { Form } from './Form'

const Contact = () => {
  return (
    <div className='h-screen flex justify-center items-center rounded-tr-[300px] relative '>
      <Image src={'/assets/images/contact.png'} alt='' fill />
      <div className='relative z-20 flex w-[1130px] mx-auto items-center justify-between'>
        <p id='contact' className='md:text-6xl text-white'>Contact Us</p>
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
                      name: 'customerEmail',
                      type: 'email',
                      label: '',
                      placeholder: 'Email*',
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
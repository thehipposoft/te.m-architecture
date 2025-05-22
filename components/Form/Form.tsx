"use client";
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    interest: '',
    name: '',
    phoneNumber: 0,
    customerEmail: '',
    message: '',
};

type FieldsType = {
    name: 'interest' | 'name' | 'customerEmail' | 'message' | 'phoneNumber' ;
    type: 'text' | 'textArea' | 'select' | 'email' | 'tel';
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    interest: string;
    name: string;
    phoneNumber: number;
    customerEmail: string;
    message: string;
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        interest: '',
        name: '',
        phoneNumber: 0,
        customerEmail: '',
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'text-2xl text-white'}>Thanks! </h2>
                <p className='text-white'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();

        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            {
                interest: values.interest,
                message: values.message,
                name: values.name,
                phoneNumber: values.phoneNumber,
                customerEmail: values.customerEmail,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                setValues(initialValues);
                setMessageSent('succeed');
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form mx-auto md:w-[600px] w-[85vw]`}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field, index)=> {
                    const { name, type, label, placeholder } = field;

                    switch (type) {
                        case 'textArea':
                            return (
                                <section className={'mb-4'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={8}
                                        cols={40}
                                        className='resize-none py-3 px-8  bg-[#f3f3f3] border-none lg:w-full lg:max-w-[500px] w-full max-w-[70vw] md:max-w-[525px] border-black focus:outline-none focus:placeholder:text-gray-400 placeholder:text-[#8d8d8d]'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        case 'tel':
                            return (
                                <section className='mb-4' key={index}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-3 px-8 lg:w-full lg:max-w-[500px] w-full max-w-[70vw] md:max-w-[525px] bg-[#f3f3f3] border-none focus:outline-none focus:placeholder:text-gray-400 placeholder:text-[#8d8d8d]'}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            );
                        default:
                            return (
                                <section className='mb-4' key={index}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-3 px-8 lg:w-full lg:max-w-[500px] w-full max-w-[70vw] md:max-w-[525px] bg-[#f3f3f3] border-none focus:outline-none focus:placeholder:text-gray-400 placeholder:text-[#8d8d8d]'}
                                        onChange={handleChange}
                                        value={values[name]}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            )
                    }
                })
            }
            {renderSentMessage()}
            <button
                disabled={isAPILoading}
                value={submitButtonLabel ? submitButtonLabel : 'Send'}
                type="submit"
                className={` ${isAPILoading ? 'opacity-50' : ''}group cursor-pointer lg:mt-20 light tracking-widest text-xs flex items-center px-8 gap-4 py-6 bg-[#f3f3f3] border-solid border border-[#f3f3f3] hover:text-[#f3f3f3] hover:bg-transparent duration-300  `}
            >
                {submitButtonLabel}
                <svg width="18" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='duration-300 group-hover:fill-white' fillRule="evenodd" clipRule="evenodd" d="M0 4.5A.5.5 0 0 1 .5 4h16a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Z" fill="#333"/><path className='duration-300 group-hover:fill-white' fillRule="evenodd" clipRule="evenodd" d="M12.646.646a.5.5 0 0 1 .708 0L17.207 4.5l-3.853 3.853a.5.5 0 0 1-.708-.707L15.793 4.5l-3.147-3.147a.5.5 0 0 1 0-.707Z" fill="#333"/></svg>
            </button>
        </form>
    )
};

export default MyCustomForm

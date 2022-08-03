import React from 'react'

function Contact() {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-gray-700 to-black p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6 text-lg'>Fill the form to get across with me</p>
                </div>
                <div className='flex  justify-center items-center'>
                    <form action='https://getform.io/f/959a3275-a2e0-4ade-83d1-1858e6642fa4' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' palceholder='Enter your name' className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white" />
                        <input type="text" name='email' palceholder='Enter your email' className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white" />
                        <textarea name='message' rows="10" placeholder='Enter your message' className="p-2 bg-transparent border-2 rounded-md text-white"></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact

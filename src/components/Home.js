import React from 'react'
import Pic from '../assets/pic.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

function Home() {
    return (
        <div name="home" className='text-white h-screen w-full bg-black   '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white '>I'm a Full stack Developer</h2>
                    <p className="text-grey-500 py-4 max-w-md">I have 1 years of experience building and designing responsive websites.
                        I build web application using technologies like React, Tailwind, Mongodb,Bootstrap,express Js.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={30} className="ml-1" /></span></Link>
                    </div>
                </div>
                <div>
                    <img src={Pic} alt="my portfolio" className="rounded-2xl mx-auto w-96 md:w-full h-96 " />
                </div>
            </div>
        </div>
    )
}

export default Home
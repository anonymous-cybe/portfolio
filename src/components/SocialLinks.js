import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function SocialLinks() {
    return (
        <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
            <ul className='flex flex-col'>
                <li className="flex justify-between  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white ">
                    <a href='https://linkedin' className="flex justify-between text-white">
                        <span >Linkedin</span>
                    </a>
                    <FaLinkedin size={30} />
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white ">
                    <a href='https://github.com/anonymous-cybe' className="flex justify-between ">
                        <>GitHub</>
                    </a>
                    <FaGithub size={30} />
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white ">
                    <a href='mailto:foo@gmail.com' className="flex justify-between text-white">
                        <>Mail</>
                    </a>
                    <HiOutlineMail size={30} />
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500  text-white">
                    <a href='/My Resume.pdf' className="flex justify-between text-white">
                        <>Resume</>
                    </a>
                    <BsFillPersonLinesFill size={30} />
                </li>
            </ul>


        </div>
    )
}

export default SocialLinks

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { MdLightMode } from 'react-icons/md'
import { MdNightlight } from 'react-icons/md'



function NavBar() {
    const [nav, setNav] = useState(false)
    const [light, setLight] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    return (
        // web version of nav
        <div>
            <div className='flex px-4 justify-between items-center w-full h-20 text-white fixed bg-black'>
                <button className='text-white font-bold text-4xl z-10 my-3 mx-4 w-14 flex justify-center items-center' onClick={() => setLight(!light)}>
                    <MdLightMode />
                </button>
                <div>
                    <h1 className='font-signature text-5xl ml-20'>SIFU.</h1>
                </div>
                <ul className=' hidden md:flex'>
                    {links.map(link => (
                        <li key={link.id} className=" px-4 cursor-pointer capitalize font-medium hover:scale-150 duration-200 text-grey-500"><Link to={link.link} smooth duration={500}>{link.link}</Link></li>


                    ))}
                </ul>
                {/* mobile version of nav */}
                <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-grey-500'>

                    {nav ? <FaTimes /> : <FaBars size={20} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>

                        {links.map(link => (
                            <li key={link.id} className=" px-4 cursor-pointer py-6 capitalize text-4xl text-red-500"><Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link></li>
                        ))}

                    </ul>

                )}


            </div>
            {light ? <div className='flex px-4 justify-between items-center w-full h-20 text-pink-500 fixed bg-white'>
                <button className='text-black font-bold text-4xl z-10 my-3 mx-4 w-14 flex justify-center items-center' onClick={() => setLight(!light)}>
                    <MdNightlight />
                </button>
                <div>
                    <h1 className='font-signature text-5xl ml-20'>SIFU.</h1>
                </div>
                <ul className=' hidden md:flex'>
                    {links.map(link => (
                        <li key={link.id} className=" px-4 cursor-pointer capitalize font-medium hover:scale-150 duration-200 text-grey-500"><Link to={link.link} smooth duration={500}>{link.link}</Link></li>


                    ))}
                </ul>
                {/* mobile version of nav */}
                <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-grey-500'>

                    {nav ? <FaTimes /> : <FaBars size={20} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>

                        {links.map(link => (
                            <li key={link.id} className=" px-4 cursor-pointer py-6 capitalize text-4xl text-red-500"><Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link></li>
                        ))}

                    </ul>

                )}


            </div> : ""}
        </div>
    )
}

export default NavBar
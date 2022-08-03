import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'

function Experience() {
    const experien = [
        {
            id: 1,
            src: css,
            title: 'Css',
            style: 'shadow-green-500'
        },
        {
            id: 2,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 3,
            src: html,
            title: 'Html',
            style: 'shadow-orange-500 captialize'
        },

        {
            id: 4,
            src: tailwind,
            title: 'tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: reactImage,
            title: 'react',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: javascript,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: node,
            title: 'node',
            style: 'shadow-green-500'
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b to-gray-700 from-black text-white w-full h-screen'>
            <div className='max-w-lg mx-auto flex flex-col w-full h-full text-white '>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                    <p className='py-6 text-xl'>TECHNOLOGIES I HAVE WORKED WITH :</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experien.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-120 duration-500 py-2 rounded-lg  ${style}`} >
                            <img src={src} alt='' className='mx-auto w-20' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>


            </div>

        </div >
    )
}

export default Experience

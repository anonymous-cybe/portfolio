import React from 'react'

import movieSite from "../assets/clips/movieSite.mp4"
import edgeLedger from "../assets/clips/edgeLedger.mp4"
import expense from "../assets/clips/expense.mp4"
import todolist from "../assets/clips/todolist.mp4"

function Portfolio() {
    const projects = [
        {
            id: 1,
            src: movieSite,
            title: "Movie Site",
        },
        {
            id: 2,
            src: edgeLedger,
            title: "Edge Ledger",
        },
        {
            id: 3,
            src: expense,
            title: "Expense Traker",
        },
        {
            id: 4,
            src: todolist,
            title: "Todo List"
        },

    ]
    return (
        <div name="portfolio" className='w-full text-white md:h-screen bg-gradient-to-b from-gray-700 to-black'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8' >
                    <p className='text-4xl font-bold inline border-gray-500 border-b-4'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                < div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {projects.map(({ id, src, title }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            {/* <img src={src} alt='hey' ' /> */}
                            <video width="320" src={src} height="240" autoPlay="true" controls className='rounded-md duration-200 hover:scale-105' >

                            </video>

                            <div className='flex flex-col justify-center items-center'>
                                <p className='font-bold text-2xl'>{title}</p>
                                {/* <div className='flex '>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button>Code</button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>






            </div>
        </div >
    )
}

export default Portfolio
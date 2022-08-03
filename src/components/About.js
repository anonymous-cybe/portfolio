import React from 'react'

function About() {
    return (
        <div name="about" className='h-screen w-full bg-gradient-to-b from-black  to-gray-700 text-white '>
            <div className="mx-auto max-w-screen-lg p-4 flex flex-col w-full h-full justify-center">
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-500'>About</p>
                </div>
                <p className="text-2xl mt-20" >My name is Franklin Ubeh Sylvanus, I am a MERN stack developer but majors in frontend development</p>
                <br />
                <p className="text-2xl">I am an ardent developer who is very passionate about providing diigital solutions to both individual and corporate bodies. My drive is to be the best at what I do and give every client of mine the maximum satisfaction and service they deserve.</p>
                <p className="text-2xl">I am a dilligent and proactive person with teamwork spirit.I am well versed in several tech stacks and open to learning new ones if it's required of me in any project that is given to me.</p>
            </div>
        </div>
    )
}

export default About
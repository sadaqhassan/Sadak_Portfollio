import React from 'react'

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-4 gap-4 mt-40  w-full mx-auto overflow-x-hidden'>
        <img className='w-60 h-60 rounded-full' src="/img.png" alt="" />
        <div className='flex flex-col gap-2'>
            <span className='font-bold text-4xl'>Hello , I'm Sadak Hassan</span>
            <p className='font-medium text-2xl border-t'> Full-Stack Software Engineer | MERN Stack</p>
            <p className='text-sm'>Full-Stack Software Engineer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) <br/>  with a strong focus on building scalable, secure, and high-performance web applications. Experienced in  <br/> developing both frontend and backend systems, creating clean, maintainable code,<br/> and designing RESTful APIs.</p>
  
        </div>
    </div>
  )
}

export default Main
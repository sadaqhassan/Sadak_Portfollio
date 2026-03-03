import React from 'react'
import { Contact2Icon, HomeIcon, IdCard, User2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const navLinks = [
        {
            name:"Home",
            icon: <HomeIcon size={20}/>,
            path: "/"
        } ,
        {
            name:"About",
            icon: <User2 size={20}/>,
            path: "/"
        }   ,
        {
            name:"Resume",
            icon: <IdCard size={20}/>,
            path: "/"
        }   ,
        {
            name:"Contact-me",
            icon: <Contact2Icon size={20}/>,
            path: "/"
        }   
    ]
  return (
    <div className='flex justify-between font-bold px-4 items-center bg-gray-700 text-white py-4'>
        <h1>samo</h1>
        <div className='flex space-x-2'>
            {
                navLinks.map((link)=>(
                    <NavLink to={link.path} className='flex gap-1 text-sm'>
                        <span>{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))
            }
        </div>

        <button className='text-white bg-blue-600 px-2 py-1 rounded'>
            Download Cv
        </button>
    </div>
  )
}

export default Nav
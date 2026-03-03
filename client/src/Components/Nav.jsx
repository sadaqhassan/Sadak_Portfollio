import React from 'react'
import { Contact2Icon, DownloadCloudIcon, DownloadIcon, HomeIcon, IdCard, User2 } from 'lucide-react'
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
                    <NavLink to={link.path} className='flex gap-1 text-sm hover:text-blue-500'>
                        <span>{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))
            }
        </div>

        <button className='text-white text-sm bg-primary px-2 flex gap-2 py-1 rounded'>
           <DownloadIcon/> CV
        </button>
    </div>
  )
}

export default Nav
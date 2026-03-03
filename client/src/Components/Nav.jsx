import React, { useState } from 'react'
import { Contact2Icon, DownloadCloudIcon, DownloadIcon, HomeIcon, IdCard, MenuIcon, User2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [isOpen ,setIsOpen] = useState(false)
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
    <main>
        
    <div className='flex justify-between font-bold px-4 items-center bg-gray-700 text-white py-4'>
        <h1 className='text-2xl font-bold'>samo</h1>
        <div className='md:flex space-x-2 hidden '>
            {
                navLinks.map((link)=>(
                    <NavLink to={link.path} className='flex gap-1 text-sm hover:text-blue-500'>
                        <span>{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))
            }
        </div>

        <div className='flex gap-4'>
        <button className='text-white text-sm bg-primary px-2 flex gap-2 py-1 rounded'>
        <DownloadIcon/> CV
        </button>
        <button className='flex md:hidden' onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></button>
        </div>
    </div>
    

    {
        isOpen &&
        <div className='flex flex-col md:hidden gap-4 space-y-2 py-3 bg-gray-700 text-white font-bold'>
            {
                navLinks.map((link)=>(
                    <NavLink to={link.path} className='flex gap-1 text-sm hover:text-blue-500'>
                        <span>{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))
            }
        </div>
    }
    </main>
  )
}

export default Nav
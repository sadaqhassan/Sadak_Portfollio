import React from 'react'
import { Contact2Icon, HomeIcon, IdCard, User2 } from 'lucide-react'

const Nav = () => {
    const navLinks = [
        {
            name:"Home",
            icon: <HomeIcon/>
        } ,
        {
            name:"About",
            icon: <User2/>
        }   ,
        {
            name:"Resume",
            icon: <IdCard/>
        }   ,
        {
            name:"Contact-me",
            icon: <Contact2Icon/>
        }   
    ]
  return (
    <div className=''>

    </div>
  )
}

export default Nav
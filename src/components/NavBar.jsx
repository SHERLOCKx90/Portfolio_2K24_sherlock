import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropHandler = () => {
    setToggleDropdown(!toggleDropdown);
  }
  return (
    <nav>
      {/* Desktop navigation */}
      {/* this div will be hidden on screens smaller than the small breakpoint (less than 640px wide), and it will be displayed as a flex container on small screens and larger. */}
      <div className='sm:flex hidden'>
        <div className='flex flex-row justify-between items-center w-full mx-20 my-10'>
          <Link to="/"><img src="../../logo.svg" alt="" width={120} height={120} /></Link>
          <ul className='flex flex-row items-center justify-evenly gap-10 font-poppins'>
            <li className='cursor-pointer'><Link to="/about">About</Link></li>
            <li className='cursor-pointer'><Link to="/projects">Projects</Link></li>
            <li className='cursor-pointer'><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* this div will be displayed as a flex container and positioned relatively on screens smaller than the small breakpoint (less than 640px wide). On small screens and larger, it will be hidden. */}
      <div className='sm:hidden flex relative'>
        <div className='flex justify-between w-full mx-5 my-5'>
          <Link to="/"><img src="../../logo.svg" alt="" width={120} height={120} /></Link>
          <img src="../../menu.svg" alt="this is the menu breadcrumb logo" onClick={dropHandler} width={40} className='cursor-pointer' />
          {toggleDropdown && (
            <div className='bg-white flex flex-col justify-center items-end border-2 border-black p-4 absolute right-0 top-[4rem] mx-5 gap-5 w-[10rem]'>
              <div className='flex flex-row justify-end items-center'><img src="../../cross.svg" alt="" onClick={dropHandler} className='cursor-pointer' /></div>
              <ul className='w-full gap-2 flex flex-col font-poppins'>
                <li className='cursor-pointer py-2 px-2'><Link to="/about">About</Link></li>
                <li className='cursor-pointer py-2 px-2'><Link to="/projects">Projects</Link></li>
                <li className='cursor-pointer py-2 px-2'><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
    // Mobile Navigation
  )
}

export default NavBar

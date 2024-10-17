import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800  text-white flex justify-between  items-center px-4 h-14">
        <div className="logo font-bold text-lg ">GetMeChai</div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>about</li>
            <li>projects</li>
            <li>login</li>
            <li>signup</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link
 } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className='fixed top-0 w-full px-[10%] py-4 bg-indigo-400 flex items-center justify-between shadow-md shadow-indigo-100'>

    <h1 className='text-xl text-white font-bold'>Logo</h1>

    <ul className='flex items-center gap-x-[30px]'>
        <li className='text-white text-xl font-medium'><Link to='/'>Home</Link></li>
        <li className='text-white text-xl font-medium'><Link to='/posts'>Posts</Link></li>
        <li className='text-white text-xl font-medium'><Link to='/users'>Users</Link></li>
    </ul>
    
  </header>
        )
}

export default Navbar
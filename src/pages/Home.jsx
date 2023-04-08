import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-500 flex flex-col items-center justify-center px-[20%] text-center'>
        <h1 className='text-8xl text-white drop-shadow-lg font-extrabold'>Welcome</h1>
        <p className='text-lg text-ellipsis '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, iste quos. Architecto eaque omnis quisquam, quod dignissimos reiciendis eligendi numquam.</p>
    <div className='flex items-center gap-x-4'>
        <Link className='px-6 rounded-md shadow-md bg-indigo-500 text-white font-semibold hover:bg-indigo-600' to={'/posts'}>Read more</Link>
        <Link className='px-6 rounded-md shadow-md bg-white font-semibold hover:bg-indigo-600' to={'/posts'}>View users</Link>

    </div>
    </div>
  )
}

export default Home
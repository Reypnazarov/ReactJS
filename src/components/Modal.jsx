import React from 'react'

const Modal = ({ setModalIsOpen, title, setTitle, body, setBody, creatPost }) => {
  return <div className='fixed flex items-center justify-center bg-[rgba(0,0,0,.4)] top-0 left-0 w-full h-screen z-[999999]'>
    <form onSubmit={creatPost} className='bg-white flex flex-col p-6 gap-4 rounded-md shadow-md w-[400px] min-h-[500px]'>
        <input className='border-2 border-gray-300 py-2 px-4 rounded-md' onChange={e => setTitle(e.target.value)} value={title} type='text' placeholder='Enter title'/>
        <textarea className='border-2 border-gray-300 py-2 px-4 rounded-md' onChange={e => setBody(e.target.value)} value={body} placeholder='Enter discription'></textarea>
        <button className='py-2 px-4 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 duration-200'>Submit</button>
    </form>
    <button className='fixed top-[70px] right-[70px] text-white text-3xl' onClick={e => {setModalIsOpen(false)}}>x</button>
  </div>
}

export default Modal
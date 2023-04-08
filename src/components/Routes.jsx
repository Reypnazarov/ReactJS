import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Posts from '../pages/Posts'

const MyRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  )
}

export default MyRoutes
import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <hr className='border-2 border-black rounded-xl mt-10' />
        <Footer/>
    </>
  )
}

export default Layout
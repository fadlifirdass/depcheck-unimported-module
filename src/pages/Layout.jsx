import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
   <React.Fragment>
    <div className='container mt-3'>
    <Navbar/>
    <br />
    <main>{children}</main>
    <br/>
    <Footer/>
    </div>
   </React.Fragment>
  )
}

export default Layout

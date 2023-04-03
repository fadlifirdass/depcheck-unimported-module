import React from 'react'
import Footer from '../components/Footer'
import NavbarRegist from '../components/NavbarRegist'

const LayoutRegister = ({children}) => {
  return (
    <div>
    <React.Fragment>
    <div className='container mt-3'>
    <NavbarRegist/>
    <br />
    <main>{children}</main>
    <br/>
    <Footer/>
    </div>
   </React.Fragment>
    </div>
  )
}

export default LayoutRegister

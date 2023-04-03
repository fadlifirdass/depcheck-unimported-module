import React from 'react'
import Footer from '../components/Footer'
import NavbarLogin from '../components/NavbarLogin'


const LayoutLogin = ({children}) => {
  return (
    <div>
    <React.Fragment>
    <div className='container mt-3'>
    <NavbarLogin/>
    <br />
    <main>{children}</main>
    <br/>
    <Footer/>
    </div>
   </React.Fragment>
    </div>
  )
}

export default LayoutLogin

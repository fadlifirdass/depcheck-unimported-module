import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRegist = () => {
  return (
    <div>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
      <figure class="image is-96x96">
            <img src="https://99usahaku.com/logo144.png"/>
        </figure>
        </Link>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar">
          {/* <div className="navbar-item">
          <input class="input is-rounded" type="text" placeholder="Text input"/>
          </div> */}
    
    
        </div>  
    
        <div className="navbar-end">
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarRegist

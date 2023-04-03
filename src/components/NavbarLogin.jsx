import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, reset} from "../features/authSlice"
import { Link } from 'react-router-dom';

const NavbarLogin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  const logout = () => {
      dispatch(LogOut())
      dispatch(reset())
      navigate('/')
  }

  return (
    <div>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/dashboard">
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
          <div className="navbar-item">
          <input class="input is-rounded" type="text" placeholder="Text input"/>
          </div>
    
    
        </div>  
    
        <div className="navbar-end"> 
        <div className="navbar-item">
        <h1 className='subtitle is-6'>Halo, <strong> {user && user.name}</strong> | Role : <strong>{user && user.role}</strong> </h1>
        </div>

        {user && user.role === "seller" && (
           <div className="navbar-item">
           <div className="buttons">
             <Link to="/manageproducts" className="button is-success">
                 Products
             </Link>
           </div>
         </div>
        )}
       


          <div className="navbar-item">
            <div className="buttons">
              <button onClick={logout} className="button is-danger">
                  Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarLogin

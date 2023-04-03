import React,{useState} from 'react'
import PopUpLogin from './PopUpLogin'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  return (
    <div>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <figure class="image is-96x96">
            <img src="https://99usahaku.com/logo144.png"/>
        </figure>
    
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
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={()=> setButtonPopUp(true)} className="button is-danger">
                <strong>Login
                </strong>
              </button>
              <div>
              <PopUpLogin trigger={buttonPopUp}>
                    <button className='close-btn' onClick={() => setButtonPopUp(false)} >Close</button>
                  </PopUpLogin>
                  </div>
              <Link to="/register" className="button is-light">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
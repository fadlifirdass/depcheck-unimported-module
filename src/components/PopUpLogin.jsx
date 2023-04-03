import React ,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset} from "../features/authSlice"
import '../style/PopUpLogin.css'

const PopUpLogin = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth )

  useEffect(()=>{
    if(user || isSuccess){
      navigate("/dashboard")
    }
    dispatch(reset())
  },[user, isSuccess, dispatch, navigate])

    const Auth = (e)=>{
      e.preventDefault()
      dispatch(LoginUser({email, password}))
    } 

  return (props.trigger)? (
    <div className='popup'>
      <div className='popup-inner'>
        <div>
            {props.children}
            </div>
            <div className='form'>
              <form onSubmit={Auth}>
                {isError && <p className='has-text-centered'>{message}</p>}
              <div>
                <h2 className='title is-4 mx-6'>Masuk Ke Akun Anda</h2>
              </div>
              <br />
              <br />
              <div>
                <p>Email/No. Handphone</p>
                <input type="text" className='inputname' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
             <div>
             <p>Kata Sandi</p>
                <input type="password" className='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <a>Lupa Kata Sandi?</a>
              </div>
              <br />
              <br />
              <div>
                <button type='submit' className='button is-danger is-fullwidth'>
                  { isLoading ? 'Loading...' : 'Login'}
                  </button>
              </div>
              </form>
        </div>
      </div>
    </div>
  ): "";
}

export default PopUpLogin

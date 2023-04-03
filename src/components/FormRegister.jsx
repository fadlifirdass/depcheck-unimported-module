import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../style/Register.css"

const FormRegister = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [role, setRole] = useState("seller")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()

    const Register = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users",{
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
          role: role,
        })
        navigate('/')
      } catch (error) {
        if(error.response){
          setMsg(error.response.data.msg);
        }
      }
    };


  return (
    <div className='box mr-6'>
    <form onSubmit={Register}>
    <div>
      <h2 className='title is-4 mx-6'>Daftar Akun Baru</h2>
      <p className='has-text-centered'>{msg}</p>
    </div>
    <br />
    <br />
    <div>
      <p>Nama Lengkap</p>
      <input type="text" className='input'
      value={name} onChange={(e) => setName(e.target.value) }
      />
    </div>
    <div>
      <p>Email/No. Handphone</p>
      <input type="text" className='input'
      value={email} onChange={(e) => setEmail(e.target.value) }
      />
    </div>
   <div>
   <p>Kata Sandi</p>
      <input type="password" className='input'
      value={password} onChange={(e) => setPassword(e.target.value) }
      />
    </div>
    <div>
   <p>Konfirmasi Kata Sandi</p>
      <input type="password" className='input'
      value={confPassword} onChange={(e) => setConfPassword(e.target.value) }
      />
    </div>
    <div className="field">
                <label>Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                    value={role} onChange={(e) => setRole(e.target.value) }
                    >
                      <option value="seller">Seller</option>
                      <option value="buyer">Buyer</option>
                    </select>
                  </div>
                </div>
              </div>
    <br />
    <br />
    <div>
      <button type='submit' className='button is-danger is-fullwidth'>
        Register
        </button>
    </div>
    </form>
</div>
 
  )
}

export default FormRegister

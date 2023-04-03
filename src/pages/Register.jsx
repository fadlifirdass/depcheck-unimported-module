import React from 'react'
import FormRegister from '../components/FormRegister'
import LayoutRegister from './LayoutRegister'


const Register = () => {
  return (
    <LayoutRegister>
        <br />
        <div class="columns is-vcentered">
  <div class="column is-6 ml-6">
    <img className='' src="https://99usahaku.com/logo.png" alt="image" width = "500" height = "500" />
  </div>
  <div class="column mr-6">
   <FormRegister/>
  </div>
</div>
    </LayoutRegister>
  )
}

export default Register

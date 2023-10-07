import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  let [phone,setphone] = useState("")
  let [password,setpassword] = useState("")

  let handleLogin = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/users/verify?phone=${phone}&password=${password}`)
    .then((res)=>{
      console.log("login sucesfull"+res);
    })
    .catch((err)=>{
      console.log("Something went wrong"+err);
    })
  }
  return (
    <div className='userlogin'>
        <form action="">
          <br />
          <input pattern='[0-9]{10}' type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter the Phone no'  />
          <br />
          <br />
          <br />
          <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' />
          <br />
          <br /><br />
          <button onClick={handleLogin} id='ulb1'>Login</button>
          <br />
          <p>New user ? click here to <Link to="/signup">Register</Link> </p>
          
        </form>
    </div>
  )
}

export default Login
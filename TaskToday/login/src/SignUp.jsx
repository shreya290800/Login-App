import axios from 'axios'
import React, { useState } from 'react'

const AdminSignUp = () => {
  let [name,setname] = useState("")
  let [phone,setphone] = useState("")
  let [email,setemail] = useState("")
  let [password,setpassword] = useState("")
  let [gst,setgst] = useState("")
  let data = {name,phone,email,password,gst}

  let handlesubmit = (e) =>{
    e.preventDefault()

    console.log(data);
    axios.post('http://localhost:8080/users',data)
    .then((res)=>{
      alert('SUbmitted the data to the database')
    })
    .catch(()=>{
      alert("Something Went Wrong")
    })
  }

  return (

    <div className='AdminSignUp'>
      <form id='usf' action="">
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Username' name="" id="" />
        <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder=' Enter the phoneno' name="" id="" />
        <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter the Email Id' />
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' />
        <input type="text" value={gst} onChange={(e)=>{setgst(e.target.value)}} placeholder='Gst' />
        <button onClick={handlesubmit}>Register</button>
      </form>
    </div>
  )
}

export default AdminSignUp
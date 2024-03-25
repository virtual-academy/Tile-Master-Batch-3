import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const myFunction = ()=>{
      let m = prompt("Enter your email");
      let n = prompt("Enter your Password");
      if(m==='shahid' && n==="123"){
        alert("Login Successfull....")
        navigate('/books')
      }else{
        alert("Login Failed....")
      }
    }
  return (

    <div>
      <button onClick={myFunction}>Click Me</button>
    </div>
  )
}

export default Home

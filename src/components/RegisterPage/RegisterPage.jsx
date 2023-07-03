import React, { useState } from 'react'
import "../LandingPage/landingPage.css"
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

const RegisterPage = () => {
  const [displayName, setDisplayName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    const response = await fetch('https://bloomapi.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({username, email, password, confirmPassword}),
      headers: {'Content-type': 'application/json'},
  
    })

    if (response.status === 200) {
      alert("Registration successful")
    } else {
      alert("Registration failed ")
    }

    console.log(response)
  }

  return (
    <>
    <Navbar />
    <div className='landingPage'>
      <div className='landingpagecontainer'>
      <p className='landingpagetext'>Connect with people, <br/> Share your views and <br/> beautiful moments.</p>
        
        <div className='landingpage-signup'>
          <h3>Create an account</h3>
        <form onSubmit={handleRegister} className='register-form'>
          <label>Display Name</label>
          <input type='text' 
          value={displayName} 
          onChange={(e) => setDisplayName(e.target.value)}
          />
          <p>Add your Real name as display name e.g John Smith</p>

          <label>Username</label>
          <input type='text' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email Address</label>
          <input type='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input type='password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input type='password' 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}

          />
          <button>Create my account</button>
        </form>
        <p>Already registered? <span className='signup-text'><Link to= "/login">Login</Link></span> </p>
      </div>

      </div>
    <p className='copyright'>Bloom @ {year} </p>
    </div>
    </>
  )
}

export default RegisterPage;
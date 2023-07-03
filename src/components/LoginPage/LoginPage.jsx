import React, { useContext, useState } from 'react'
import "../LandingPage/landingPage.css"
import Navbar from '../navbar/Navbar'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const year = new Date().getFullYear()



const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('https://bloomapi.onrender.com/login', {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': "application/json"},
      credentials: "include",
    })

    if (response.ok) { 
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    } else {
      alert("wrong credentials")
    }
  }

    if (redirect) {
      return <Navigate to = {'/'} />

    }

  return (
    <>
    <Navbar />
    {redirect? <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
      </svg> :
    <div className='landingPage'>
      <div className='landingpagecontainer'>
      <p className='landingpagetext'>Connect with people, <br/> Share your views and <br/> beautiful moments.</p>

      <div className='landingpage-signup'>
          <h3>Log in to your account</h3>
        <form onSubmit={handleLogin} className='login-form'>
          <label>Username </label>
          <input type='text' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
        </form>
          <p>Not registered? <span className='signup-text'><Link to= "/register">Sign Up</Link></span> </p>
      </div>
    

      </div>
    <p className='copyright'>Bloom @ {year} </p>
    </div>
    }

    </>
  )
}

export default LoginPage;
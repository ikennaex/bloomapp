import React, { useState } from 'react'
import "./landingPage.css"
import NavbarHome from '../navbar/NavbarHome'


const year = new Date().getFullYear()

const handleLogin = (e) => {
  e.preventDefault()
}

const handleCreate = (e) => {
  e.preventDefault()
}

const LandingPage = () => {
  const [signup, setSignup] = useState(true);

  return (
    <>
    <NavbarHome />
    <div className='landingPage'>
      <div className='landingpagecontainer'>
      <p className='landingpagetext'>Connect with people, <br/> Share your views and <br/> beautiful moments.</p>

      {signup ?
      <div className='landingpage-signup'>
          <h3>Log in to your account</h3>
        <form onSubmit={handleLogin} className='login-form'>
          <input type='text' placeholder='Username or Email' />
          <input type='password' placeholder='Password' />
          <button>Login</button>
        </form>
          <p>Not registered? <span onClick={() => setSignup(false)} className='signup-text'><a>Sign Up</a></span> </p>
      </div>
        : 
        
        <div className='landingpage-signup'>
          <h3>Create an account</h3>
        <form onSubmit={handleCreate} className='register-form'>
          <input type='text' placeholder='Username or Email' />
          <input type='password' placeholder='Phone number' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm password' />
          <button>Create my account</button>
        </form>
        <p>Already registered? <span onClick={() => setSignup(true)} className='signup-text'><a>Login</a></span> </p>
      </div>

        }

      </div>
    <p className='copyright'>Bloom @ {year} </p>
    </div>
    </>
  )
}

export default LandingPage
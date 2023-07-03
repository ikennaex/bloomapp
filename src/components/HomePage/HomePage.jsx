import React, { useEffect, useState } from 'react'
import "./homepage.css"
import Post from '../Posts/Post'
import Contacts from '../Contacts/Contacts'
import UserTools from '../Usertools/UserTools'
import NavbarHome from '../navbar/NavbarHome'

const HomePage = () => {
  const [posts, setPosts] = useState('')
  useEffect(() => {
    fetch('https://bloomapi.onrender.com/addnewphoto').then(response => {
      response.json().then(postsDb => {
        setPosts(postsDb)
      })
    })
  }, [])
  return (
    <>
    <NavbarHome />
    <div className='homepage-div'>

      <div>
      <UserTools />
      </div>

      <div>
        
        {posts.length > 0  ? posts.map(post => (
          <Post {...post} /> 
        )) : <svg className='svg-spinner' viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>}

      </div>

        <Contacts />
    </div>

    </>
  )
}

export default HomePage
import React, { useState, useEffect} from 'react'
import "./Blog.css"
import NavbarHome from '../navbar/NavbarHome'
import {RiAddCircleFill} from "react-icons/ri"
import BlogPreview from './BlogPreview'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState("")
  useEffect(() => {
    fetch('https://bloomapp-api.onrender.com/create-article').then(response => {
      response.json().then(postsDb => {
        setBlogPosts(postsDb)
      })
    })
  }, [])

  return (
    <div>
        <NavbarHome />
        <Link to={"/create-article"} >
        <div className='publish-post'> <RiAddCircleFill size={23} /> <p className='publish-text'> Publish an article</p> </div>
        </Link>
        
        <p className='welcome-text'>Welcome to our blog</p>

        <div className='blogpreview-blogpage'>
          {blogPosts.length ? blogPosts.map(blogPost => (
            <BlogPreview {...blogPost} />
          )): <svg className='svg-spinner' viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>}

        </div>
    </div>
  )
}

export default Blog
import React from 'react'
import "./BlogPreview.css"
import { Link } from 'react-router-dom'

const BlogPreview = ({_id, title, image, body, author, createdAt}) => {
  return (
    <div className='blogprevieW-main'>
      <Link to={`/blogpost/${_id}`}>
        <img className='blogpreview-img' src= {`http://localhost:4000/${image}`} />
      </Link>

      <Link to={`/blogpost/${_id}`}>
        <p className='blogpreview-title'>{title}</p>
      </Link>
        <p maxWidth= {20} className='blogpreview-desc'>{body}</p>
        <p className='blogpreviewauthor-div'>by <span className='blogpreview-author'> {author.username} </span></p>
    </div>
  )
}

export default BlogPreview
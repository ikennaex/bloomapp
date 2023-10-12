import React, { useEffect, useState } from 'react'
import "./BlogPost.css"
import NavbarHome from '../navbar/NavbarHome';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const [postInfo, setPostInfo] = useState("")
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://bloomapp-api.onrender.com/blogpost/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo)
    })
  })
  }, [])

  if (!postInfo) return ""
  return (
    <>
    <NavbarHome />
    <div className='blogpost'>
        
        <div className='blogpost-main'>
        <h3 className='blogpost-title'>{postInfo.title}</h3>
        <div className='blogpost-authorpicture'>
          <img src='https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png' />
          <p>{postInfo.author.username}</p>
        </div>
        <p className='blogpost-publish'>Published <span className='blogpostpublish-date'>{postInfo.createdAt}</span></p>
        <img className='blogpost-image' src= {`https://bloomapp-api.onrender.com/${postInfo.image}`} />
        <p className='blogpost-body'> {postInfo.body} </p>
        </div>

        <div className='blogpost-authordiv'>
          <div>
            <img />
            <p>This is the related post</p>
          </div>
        </div>

    </div>
    </>
  )
}

export default BlogPost;
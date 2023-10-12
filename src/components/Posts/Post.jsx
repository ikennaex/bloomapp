import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import "./post.css"
import {LuThumbsUp} from "react-icons/lu"
import {BiCommentDetail} from "react-icons/bi"
import {LuShare} from "react-icons/lu"
// this is the React time ago library
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
// time ago library 

const Post = ({caption, image, createdAt, author}) => {
  return (
    
    <div className='posts-homepage'>

      
    <div className='samplePosts'>

      <div className='post-background'>
      <div className='post-userinfo'>
        <img className='post-profile-image' src='https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png' />
        <h4 className='post-displayname'>{author.username}</h4> <p className='post-user-action'>Shared a post</p> <p className='post-user-time'><ReactTimeAgo date={createdAt}/></p>
      </div>

      <p className='post-caption'>{caption}</p>

      <div className='main-post'>
      <img className='post-image' src= {"https://bloomapp-api.onrender.com/"+image} />
      </div>

        {/* Section for Likes, Comments and shares */}
        <div className='post-borderline'></div>
        <div className='post-reactions'>
        <div> <LuThumbsUp /> Like</div>
        <div> <BiCommentDetail /> Comment</div>
        <div> <LuShare /> Share</div>
      </div>
      
      </div>



    </div>

  </div>
  )
}

export default Post
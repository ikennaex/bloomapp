import React from 'react'
import {useState} from "react"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {HiOutlinePhotograph} from "react-icons/hi"
import {RiArticleLine} from "react-icons/ri"
import {HiUserGroup} from "react-icons/hi"
import { bookmark, friends, multipleusers, shoppingcart, blog } from '../../imports'
import "./UserTools.css"
import { Link } from 'react-router-dom'
import AddNewPhoto from '../AddNewPhoto/AddNewPhoto'

const UserTools = () => {
  const [userToolsToggle, setUserToolsToggle] = useState(false)

  const openFn = () => {
    setUserToolsToggle(true)
  }

  const closeFn = () => {
    setUserToolsToggle(false)
  }

  return (
    <div className='user-tools'>
    <div> <img src={friends} /><p>Connections</p> </div>
    <div> <img src={multipleusers} /><p>Groups</p> </div>
    <div> <img src={shoppingcart} /><p>Marketplace</p> </div>
    <div> <img src={bookmark} /><p>Saved</p> </div>
    <Link to={"/blog"}> <div> <img src={blog} /><p>Blog</p> </div> </Link>
    
    
  <div onClick = {openFn} className='addnewpost-div'>
    <BsFillPlusCircleFill className='add-newpost-icon' size={40}/> 
  <p>add new post</p>
  </div>


    {userToolsToggle && (
  <div className='add-post-options'>
    <Link to={"/addnewphoto"}> <div> <HiOutlinePhotograph size={20} /> <p>add new photo</p> </div> </Link>

    <Link to={"/create-article"}>
    <div> <RiArticleLine size={20} /> <p>write an article</p> </div>
    </Link>
    <div> <HiUserGroup size={20} /> <p>create new group </p> </div> 
  </div>
    )}
    
  </div>
  )
}

export default UserTools
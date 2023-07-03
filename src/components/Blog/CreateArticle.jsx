import React, { useState } from 'react'
import "./Createarticle.css"
import {MdArticle} from "react-icons/md"
import { Navigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreateArticle = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  },

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const handlePublish = async (e) => {
      const data = new FormData()
      data.set('title', title)
      data.set('body', body)
      data.set('file', files[0])
    e.preventDefault()

    const response = await fetch("https://bloomapi.onrender.com/create-article", {
      method: "POST",
      body: data,
      credentials: 'include',
    });

    if(response.ok) {
      setRedirect(true)
    }

  };

  if (redirect) {
    return <Navigate to= {'/blog'} />
  }

  return (

    
    // handlePublish
    <>
    <div className='publish-div'>
      <form className='publish-form' onSubmit={handlePublish} >
        <div className='create-article-div'> <MdArticle className='create-article-icon' size={23} /> Create an Article</div>
      
      <button className='publish-btn'>Publish</button>
      </form>
    </div>

    <div className='create-article'>
        <form className='createarticle-form'>
        <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className='createarticle-title' 
        placeholder='Title' 
        type="text" />

        <label>Select a picture for your post</label>
        <input 
        className='file-input' 
        type="file"
        accept="image/*" 
        onChange={(e) => setFiles(e.target.files)}

         />
        
        <ReactQuill
        value={body} 
        modules = {modules}
        formats = {formats}
        onChange={(newVal) => setBody(newVal)}
        className='createarticle-body' 
        placeholder='Add post body' 
        />

        </form>
    </div>
    </>
  )
}

export default CreateArticle
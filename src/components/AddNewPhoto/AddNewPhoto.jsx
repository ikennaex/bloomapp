import React, { useState } from "react";
import "./AddNewPhoto.css";
import Navbar from "../navbar/Navbar";
import UserTools from "../Usertools/UserTools";
import { Navigate } from "react-router-dom";

const AddNewPhoto = () => {
  const [caption, setCaption] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  const addNewPhoto = async (e) => {
    const data = new FormData()
    data.set('caption', caption)
    data.set('file', files[0])
    e.preventDefault()

    //http://localhost:4000

    const response = await fetch("https://bloomapp-api.onrender.com/addnewphoto", {
      method: "POST",
      body: data,
      credentials: 'include',
    })

    if(response.ok) {
      setRedirect(true)
    }

  };

  if (redirect) {
    return <Navigate to={'/'} />
  }
 
  return (
    <>
      <Navbar />
      <div className="addnewphoto-div">
        <UserTools />

        <div className="newpostdiv">
          <form className="newpostform" onSubmit={addNewPhoto}>
            <p className="postapic-text">Post a Photo 💜</p>

            <input
              type="text"
              placeholder="Add a caption to your photo"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setFiles(e.target.files)}
            />

            <button>Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewPhoto;

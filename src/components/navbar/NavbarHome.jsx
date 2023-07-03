import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../UserContext";

const NavbarHome = () => {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('https://bloomapi.onrender.com/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, [])

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: "include",
            method: "POST",
        })

        setUserInfo(null)
    }

  const username = userInfo?.username
  return (
    <div>
      <div className="navbar">
        <div className="logoandsearch">
        <Link to={"/"}>
          {" "}
          <h2 className="logo">Bloom</h2>{" "}
        </Link>

        <div>
        <input className="search-bloom" placeholder="Search Bloom" />
        </div>
        </div>



        {username && (
            <div className="userInfo-div">
            <p>{username}</p>
            <p className = "logout-btn" onClick={logout}>Logout</p>
            </div>
        )}

        {!username && (

        <div className="signup">
          <Link to={"/register"}>
            <p className="createaccount-btn">Create account</p>
          </Link>

          <Link to={"/login"}>
            <button className="login-btn">Login</button>
          </Link>
        </div>

        )}
      </div>
    </div>
  );
};

export default NavbarHome;

import "./Hero.css"
import { Link } from "react-router-dom"

import React from 'react'
import back from "../assests/back.jpg"

export default function Hero() {
  return (
    <div className="her">
        <div className="mask">
            <img className="intro-img" src={back} alt="intro pic" ></img>
        </div>
        <div className="content">
            <p className="wel"><h1>Welcome</h1></p>
            
            <Link className="btn" to="/project">Project</Link>
           
            <Link className="btn" to="/contact">contact</Link>
        </div>
      
    </div>
  )
}

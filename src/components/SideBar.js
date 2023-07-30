import React from 'react'
import "./SideBar.css";

function SideBar() {
  return (
    <div>
        <div class="sidebar">
            <a class="active" href="#home">Logo</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    </div>
  )
}

export default SideBar
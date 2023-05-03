import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './logo.png'

export default function Nav() {
  const [show, handleShow] = useState(false);

  const transistionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);
    return () => window.removeEventListener("scroll", transistionNavBar);
  },[])

  return (
    <div className={`nav ${show && 'nav_balck'}`}>
      <div className='nav_contents'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt='' className='nav_logo'></img>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt=""
        className='nav_avatar'
        ></img>
      </div>
    </div>
  )
}

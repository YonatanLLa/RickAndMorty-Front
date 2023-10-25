import React from 'react'
import {  useNavigate } from 'react-router-dom'
import styles from "./Landing.module.css"

const Landing: React.FC = () => {
  const navigate = useNavigate()
  console.log(navigate, "navigate");

  const handleClick = () =>{
      navigate("/home")
  }
  
  return (
    <div>
      <h1>Landing</h1>
      <button
        className={styles.button}
        onClick={handleClick}>
        Navega conmigo
      </button>
    </div>
  )
}

export default Landing
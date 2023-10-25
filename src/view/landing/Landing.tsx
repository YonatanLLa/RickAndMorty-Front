import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';


const Landing: React.FC = () => {
  
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/home")
  }
  return (
    <div className={styles.landingContiner}>
          <h1 className={styles.landingTitle}>
            RICK AND MORTY
          </h1>
          <div className={styles.landingElement}>
          </div>

          <button onClick={handleClick} className={styles.landingButton}>¡Explora conmigo!</button>
    </div>
  );
};

export default Landing;
import './About.css';
import React from 'react';
import { svg } from './svg';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>¡Hola Mundo!</h1>
        <p>Soy Yontan Llanto, un apasionado desarrollador web. Bienvenido a mi espacio digital.</p>
        {/* Puedes agregar más contenido sobre ti aquí */}
      </div>
      <ul className='redesSociales'>
        <li>
          <a href="https://github.com/YonatanLLa" target='_black' dangerouslySetInnerHTML={{ __html: svg.github }}/>
          </li>
        <li>
          <a href="https://www.linkedin.com/in/yonatanllanto/" target='_black'
          dangerouslySetInnerHTML={{ __html: svg.linkedin }}/>
        </li>
        <li>
          <a href="https://www.instagram.com/frontendyona/?next=%2F" target='_black'
          dangerouslySetInnerHTML={{ __html: svg.instagram }}/>
            </li>
      </ul>
    </div>
  );
}

export default About;
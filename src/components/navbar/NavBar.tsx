import "./NavBar.css"
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="nav-container">
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/home">Teajetas</Link>
            </li>
            <li>
                <Link to="/about"> Sobre Mí  </Link>
            </li>
            <li>
                <Link to="/favorites"> Favoritos </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
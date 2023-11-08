import "./NavBar.css"
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="nav-container">
        <ul>
            <li>
                <Link to="/">Landing</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
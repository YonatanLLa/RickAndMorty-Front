import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <div>
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
    </div>
  )
}

export default NavBar
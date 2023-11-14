import "./NavBar.css"
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home')
    const handlePageChange = (page: string) => {
        setCurrentPage(page)
    }
    
  return (
    <nav className="nav-container">
        <ul>
            <li className={ currentPage === "landing"? "activate": "" }>
                <Link to="/" onClick={() => handlePageChange("landing")}>Inicio</Link>
            </li>
            <li className={ currentPage === "home"? "activate": "" } >
                <Link 
                    to="/home"
                    onClick={() => handlePageChange("home")}
                    >Teajetas</Link>
            </li>
            <li className={ currentPage === "about"? "activate": "" } >
                <Link 
                    to="/about"
                    onClick={() => handlePageChange("about")}
                     > Sobre Mí  </Link>
            </li>
            <li className={ currentPage === "favorites"? "activate": "" } >
                <Link 
                    to="/favorites"
                    onClick={() => handlePageChange("favorites")}
                    > Favoritos </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OptionsNavbar from './OptionsNavbar'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <div className='nav'>
            <Link to={'/home'} >
                <div className="title-container">
                    <h1>Tienda APP</h1>
                </div>
            </Link>
            <div className={`right-container ${navbarOpen ? "showMenu" : ""}`}>
                <OptionsNavbar />
                <div className="search-container">
                    <form action="/">
                        <input type="text" placeholder="Buscar.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            <i className="menu-toggle fas fa-bars" onClick={handleToggle}></i>


        </div>
    )
}

export default Navbar
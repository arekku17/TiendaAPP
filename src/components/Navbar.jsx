import React from 'react'
import { Link } from 'react-router-dom'
import OptionsNavbar from './OptionsNavbar'


const Navbar = () => {
  return (
    <div className='nav'>
        <Link to={'/home'} >
        <div className="title-container">
            <h1>Tienda APP</h1>
        </div>
        </Link>
        <div className="right-container">
            <OptionsNavbar/>
            <div className="search-container">
                <form action="/">
                    <input type="text" placeholder="Buscar.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
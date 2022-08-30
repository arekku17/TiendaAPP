import React from 'react'
import OptionsNavbar from './OptionsNavbar'


const Navbar = () => {
  return (
    <div className='nav'>
        <div className="title-container">
            <h1>Tienda APP</h1>
        </div>
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
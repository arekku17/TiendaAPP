import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="title-container">
            <h1>Tienda APP</h1>
        </div>
        <div className="right-container">
            <div className="links-container">
                <a href="/login">Iniciar Sesión</a>
                <a href="/register">Registrarse</a>
            </div>
            <div class="search-container">
                <form action="/">
                    <input type="text" placeholder="Buscar.." name="search"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
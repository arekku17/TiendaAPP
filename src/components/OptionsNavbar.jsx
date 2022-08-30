import React from 'react'
import {Link} from "react-router-dom"

const OptionsNavbar = () => {
  return (
    <div className="links-container">
                
                <Link to={'/login'} >
                <a >Iniciar Sesión</a>
                </Link>
                
                <Link to={'/register'}>
                <a >Registrarse</a>
                </Link>

            </div>
  )
}

export default OptionsNavbar
import React from 'react'
import {Link} from "react-router-dom"

const OptionsNavbar = () => {
  return (
    <div className="links-container">
                
                <Link to={'/signin'} >
                <a >Iniciar Sesión</a>
                </Link>
                
                <Link to={'/signup'}>
                <a >Registrarse</a>
                </Link>

            </div>
  )
}

export default OptionsNavbar
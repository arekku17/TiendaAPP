import React from 'react'
import {Link} from "react-router-dom"

const OptionsNavbar = () => {
  return (
    <div className="links-container">
                
                <Link to={'/signin'} >
                  Iniciar Sesión
                </Link>
                
                <Link to={'/signup'}>
                  Registrarse
                </Link>

            </div>
  )
}

export default OptionsNavbar
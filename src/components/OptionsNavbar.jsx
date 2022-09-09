import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

const OptionsNavbar = () => {

  const token = localStorage.getItem("token");
  
  const deleteToken = () => {
    localStorage.clear();
  }

  return (
    <div className="links-container">

      {token ?
        <Link to={'/signin'} onClick={deleteToken}>
          Cerrar Sesión
        </Link>
        :
        <>
          <Link to={'/signin'} >
            Iniciar Sesión
          </Link> <Link to={'/signup'}>
            Registrarse
          </Link>
        </>
      }




    </div>
  )
}

export default OptionsNavbar
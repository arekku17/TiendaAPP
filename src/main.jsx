import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Products from './components/Products'
import './index.css'
import  {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignIn from './components/SignIn'
import Signup from './components/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path='/home' element={<App/>} />
        <Route path='/products/:id' element={<Products/>} /> {/**cambiar nombre de ruta */}
        {/*<Route path='/products' element={<Products/>} />*/}
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<h3>Error 404</h3>} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)


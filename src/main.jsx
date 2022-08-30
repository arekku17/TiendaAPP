import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Products from './components/Products'
import './index.css'
import  {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
        <Route path='/home' element={<App/>} />
        <Route path='/products/:id' element={<Products/>} />
        {/*<Route path='/products' element={<Products/>} />*/}
        <Route path='*' element={<h3>Error 404</h3>} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)


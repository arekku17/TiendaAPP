import React, {useState, useEffect} from 'react';
import { trackPromise } from 'react-promise-tracker';
import Navbar from './Navbar' 
import { 
    useParams,
    Link
 } from "react-router-dom";
import axios from 'axios';
import '../Products.css'

const Products = () => {

    const [product,setProduct] = useState(0);
    const params = useParams();

    useEffect(()=> {
        trackPromise(
            getProduct().then(product => {
             console.log(product);
              setProduct(product);

            })
          )
        
    },[])

    

    const getProduct = () => {
        const promise = new Promise ((resolve, reject) => {
          const url = `https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`;
          resolve(axios.get(url).then(
            response => response.data
          ))
        });
        return promise;
      }

  return (
        <>
        <Navbar/>
        <div className="product-container product-margen" >  
        <div className="img-product">
          <img src={product.image} alt={"#"} />
          <div className="product-hover-container">
            <div className="product-hover">
              <div>
                <p className="product-title-hover">Category:</p>
                <p>{product.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info">
          <p > Nombre: {product.product_name}</p>
          <br/>
          <p > Descripción: {product.description}</p>
          <br/>
          <p > Precio: ${product.price}</p>
          <br/>
          <p > Marca: {product.brand}</p>
          <br/>
          <p > Fabricación: {product.createdAt}</p>
          <br/>
          <p > Stock: {product.isActive=== true? "Activo":"Inactivo" } </p>
          <br/>
          <Link to={'/Buy'}>
            {   
                product.isActive=== true? <button className='product-button'>Comprar</button>: <p className='product-inactive'>No hay producto</p> 
            }
          </Link>

          
        </div>
    </div>
        
        </>
       
  )
}

export default Products
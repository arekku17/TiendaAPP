import React, { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import Navbar from './Navbar'
import {
  useParams,
  Link
} from "react-router-dom";
import axios from 'axios';
import '../Products.css'

const Products = () => {

  const [product, setProduct] = useState(0);
  const params = useParams();

  useEffect(() => {
    trackPromise(
      getProduct().then(product => {
        console.log(product);
        setProduct(product);

      })
    )

  }, [])



  const getProduct = () => {
    const promise = new Promise((resolve, reject) => {
      const url = `https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`;
      resolve(axios.get(url).then(
        response => response.data
      ))
    });
    return promise;
  }

  return (
    <>
      <Navbar />
      <div className="product">
        <div className="product-info">
          <p className='product-name'>{product.product_name}</p>
          <p className='product-price'>${product.price}</p>
          <p className='product-desc'> <span className='bold'>Descripción: </span> <br /> {product.description}</p>
          <p className='product-brand'><span className='bold'>Marca: </span> <br /> {product.brand}</p>
          <p className='product-cat'><span className='bold'>Categoria: </span> <br /> {product.category}</p>
          <p className='product-stock'><span className='bold'>Stock: </span> <br /> {product.isActive === true ? "Activo" : "Inactivo"} </p>
          <Link to={'/Buy'}>
            {
              product.isActive === true ? <button className='product-button active'>Comprar</button> : <p className='product-inactive'>No hay producto</p>
            }
          </Link>
        </div>
        <div className="img-product">
          <img src={product.image} alt={"#"} />
        </div>
      </div>
    </>

  )
}

export default Products
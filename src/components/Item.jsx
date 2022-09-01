import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../item.css'

const Item = ({ data }) => {
  return (
    <Link to={`/product/${data._id}`}>
      <div className="item-container">
        <div className="img-item">
          <img src={data.image} alt={data.product_name} />
          <div className="hover-container">
            <div className="hover">
              <div className="top">
                <p className="title-hover">Category</p>
                <p>{data.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-item">
          <p className="name-item">{data.product_name}</p>
          <p className="price">${data.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Item
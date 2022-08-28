import React from 'react'
import '../item.css'

const Item = ({ data }) => {
  return (
    <div className="item-container">
      <a href="" className="link-item">
        <div className="img-item">
          <img src={data.image} alt={data.product_name} />
        </div>
        <div className="info-item">
          <p className="name-item">{data.product_name}</p>
          <p className="price">${data.price}</p>
        </div>
      </a>
      <div className="hover-container">
        <div className="hover">
          <div className="top">
            <p className="title-hover">Category</p>
            <p>{data.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
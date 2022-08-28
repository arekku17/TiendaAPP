import React from 'react'
import '../item.css'

const Item = () => {
  return (
    <div className="item-container">
        <a href="" className="link-item">
            <div className="img-item">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71PAHeADLQL._AC_UY500_.jpg" alt="xd" />
            </div>
            <div className="info-item">
                <p className="name-item">Tennis Gucci Caros</p>
                <p className="price">$500</p>
            </div>
            <div className="hover-container">
              <div className="hover">
                <div className="top">
                  <p className="title-hover">Category</p>
                  <p>Computers</p>
                </div>
              </div>
            </div>
        </a>
    </div>
  )
}

export default Item
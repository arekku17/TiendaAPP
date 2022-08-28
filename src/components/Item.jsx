import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../item.css'

const url = 'https://ecomerce-master.herokuapp.com/api/v1/item/'

const Item = () => {

  const [item, setItem] = useState(0);

  useEffect(() => {

    axios.get(url).then((response) => {
      setItem(response.data);
      //console.log(response.data);   
    });

  }, []);

  if (!item) return console.log(0);



  return (
    <>
      <div>

        {item.map(item => (

          <div className="item-container">
            <a href="" className="link-item">
              <div className="img-item">
                <img src={item.image} alt="xd" />
              </div>
              <div className="info-item">
                <p className="name-item">Product: {item.product_name}</p>
                <p className="price">Price: {item.price}</p>

              </div>
              <div className="hover-container">
                <div className="hover">
                  <div className="top">
                    <p className="title-hover">Category: {item.category} </p>
                    <p className="title-hover">Brand: {item.brand} </p>

                  </div>
                </div>
              </div>
            </a>
          </div>

        ))}

      </div>

    </>
  )
}

export default Item
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from './Item'
import Pagination from './Pagination'
import "../grid.css";

const Grid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  });

  const getItems = async () => {
    const url = `https://ecomerce-master.herokuapp.com/api/v1/item`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        console.log(data);
        setItems(data);
      })
  };


  return (
    <>
      <div className="body-grid">
        <div className="options-container">
          <button className="news selected">Recientes</button>
          <button className="all">Todos</button>
        </div>
        <div className="grid-container">
          {
            items
            .slice(0, 10)
            .filter(item => item.image)
            .filter(item => item.image.includes(".jpg"))
            .map(item => (
              <Item key={item._id} data={item}/>
            ))
          }
        </div>
        <Pagination />
      </div>
    </>
  )
}

export default Grid
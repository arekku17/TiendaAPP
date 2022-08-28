import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from './Item'
import Pagination from './Pagination'
import { trackPromise } from 'react-promise-tracker';
import "../grid.css";
import LoadingIndicator from './LoadingIndicator';

const Grid = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const itemsxPagina = 20;

  useEffect(() => {
    trackPromise(
      getItems().then(item => {
        const itemsFiltrados = item
        .filter(item => item.image)
        .filter(item => item.image.includes(".jpg"));
        setItems(itemsFiltrados);
      })
    )
  }, []);

  const getItems = () => {
    const promise = new Promise ((resolve, reject) => {
      const url = `https://ecomerce-master.herokuapp.com/api/v1/item`;
      resolve(axios.get(url).then(
        response => response.data
      ))
    });
    return promise;
  }

  const changePage = (num) => {
    return setPage(num);
  }


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
            .slice(page, page + itemsxPagina) //Filtro los primeros 20
            .map(item => (
              <Item key={item._id} data={item}/>
            ))
          }
        </div>
        <LoadingIndicator/> 
        <Pagination changePage={changePage} items={items} itemsPerPage={itemsxPagina}/>
      </div>
    </>
  )
}

export default Grid
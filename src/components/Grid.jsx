import React from 'react'
import Item from './Item'
import Pagination from './Pagination'
import "../grid.css"
//import "../grid.css";

const Grid = () => {
  return (
    <div className="body-grid">
      <div className="options-container">
            <button className="news selected">Recientes</button>
            <button className="all">Todos</button>
        </div>
        <div className="grid-container">
            <Item/>
        </div>
        <Pagination/>
    </div>
  )
}

export default Grid
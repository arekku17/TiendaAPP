import React from 'react'
import '../pagination.css'

const Pagination = () => {
  return (
    <div className="pag-container">
        <ul className="pagination">
            <li><a href="">«</a></li>
            <li><a href="" className='active'>1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">...</a></li>
            <li><a href="">9</a></li>
            <li><a href="">10</a></li>
            <li><a href="">»</a></li>
        </ul>
    </div>
  )
}

export default Pagination
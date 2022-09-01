import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OptionsNavbar from './OptionsNavbar'
import "../Navbar.css";
import { trackPromise } from 'react-promise-tracker';
import axios from 'axios'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        trackPromise(
            getProduct().then(product => {
                const productosFiltrados = product
                    .filter(product => product.image)
                    .filter(product => product.image.includes(".jpg"));
                setProduct(productosFiltrados);
            })
        )
    }, []);

    const getProduct = () => {
        const promise = new Promise((resolve, reject) => {
            const url = `https://ecomerce-master.herokuapp.com/api/v1/item`;
            resolve(axios.get(url).then(
                response => response.data
            ))
        });
        return promise;
    }

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
    }


    const results = !search ? product : product.filter((dato) => dato.product_name.toLowerCase().includes(search.toLocaleLowerCase()))





    return (
        <>
            <div className='nav'>
                <Link to={'/home'} >
                    <div className="title-container">
                        <h1>Tienda APP</h1>
                    </div>
                </Link>
                <div className={`right-container ${navbarOpen ? "showMenu" : ""}`}>
                    <OptionsNavbar />
                    <div className="search-container">
                        <form action="/">

                            <input value={search} onChange={searcher} type="text" placeholder='Buscar..' name="search" />
                            {/*<button type="submit"><i className="fa fa-search"></i></button>*/}

                        </form>
                    </div>
                </div>
                <i className="menu-toggle fas fa-bars" onClick={handleToggle}></i>

                {/** AQUI RESULTADOS DE BUSQUEDA */}
            </div>

            
            <div className='result-container' >
                {results.map(product =>
                    <Link to={'/home'} >
                    <div className='result-div'>
                        <p className='result-product-name'>{product.product_name}</p>
                        <img src={product.image} className='result-image' />
                    </div>
                    </Link>
                )}
            </div>
            
        </>
    )
}

export default Navbar
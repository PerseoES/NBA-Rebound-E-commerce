import React from 'react';
import ItemDetail from './ItemDetail'
import { Link } from 'react-router-dom';



const Item = (props) => (
    <div className="card estilo-c">
    <a href="#">
        <div className="img-container">
            <img src={props.producto.img}/>
            <span className="promo">15% de descuento</span>
        </div>
    </a>
    <div className="info-container">
        <h3>{props.producto.marca}</h3>
        <strong>{props.producto.precio}</strong>
        <span className="rating">★★★★☆</span>
        <Link to={`/item/${props.producto.id}`}>
            <button className="add-cart">
                Ver detalles...
            </button>
        </Link>
    </div>
</div>


)

export default Item;

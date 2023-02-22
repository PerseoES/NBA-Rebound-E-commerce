import React from 'react';
// import ItemCount from './ItemCount';

const ItemDetail = (props) => {

return(
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
        <span className="rating">{props.producto.estado}</span>
        <button className="add-cart">ItemCount</button>
    </div>
</div>
)
}

export default ItemDetail;

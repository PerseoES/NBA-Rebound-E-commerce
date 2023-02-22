import React from 'react';
import Item from './Item';


const ItemList = (props) => (
    <section>
        <h2>Productos de la tienda</h2>
        {props.producto.map((prod)=>
                <Item producto={prod}/>
            )}
    </section>

)


export default ItemList;

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import React from 'react';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    const arrayZapatillas = [{
        id: 1,
        categoria: "zapatillas",
        marca: 'Kyrie Irving',
        estado: 'Nueva',
        precio: "1300$",
        stock: 4,
        img: "/static/media/kyrie.e8d86ff1a3f13fbe2dad.png"
    }]

    const arrayCamisetas = [{
        id: 2,
        categoria: "camisetas",
        marca: "Jordan",
        estado: "Usada",
        precio: "2300$",
        stock: 10,
        img: "/static/media/camisetajordan.359fa6091bbbb28af9b0.png"
    },
    {
        id: 3,
        categoria: "camisetas",
        marca: "Dallas",
        estado: "Usada",
        precio: "2300$",
        stock: 20,
        img: "/static/media/basket-dallas.8606fd226b5d791a6b20.png"
    }
    ,
    {
        id: 4,
        categoria: "camisetas",
        marca: "Curry",
        estado: "Usada",
        precio: "2300$",
        stock: 20,
        img: "/static/media/basket-dallas.8606fd226b5d791a6b20.png"
    }]

    useEffect(() => {
        let producto = null
        
        producto = arrayCamisetas.find(producto => producto.id == id)

        if(producto!=null){
            setProducto(producto)
        }

        if (producto==null){
            let producto = arrayZapatillas.find(producto => producto.id == id)
            setProducto(producto)
        }
        
        console.log(producto);

    }, [id]);

    return (
        <div className="title-welcome"><ItemDetail producto={producto}></ItemDetail></div>
    )
}

export default ItemDetailContainer;
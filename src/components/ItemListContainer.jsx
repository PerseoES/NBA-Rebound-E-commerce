import '../styles.css';
import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imgKyrie from '../assets/kyrie.png'


const ItemListContainer = () => {
    const [producto, setProducto] = useState([]);
    const {name} = useParams();
    
    const arrayZapatillas = [{
        id:1,
        categoria:'zapatillas',
        marca:'Kyrie Irving',
        estado:'Nueva',
        precio:"1300$",
        stock:4,
        img:"/static/media/kyrie.e8d86ff1a3f13fbe2dad.png"}]

    const arrayCamisetas = [{
        id:2,
        categoria:'camisetas',
        marca:"Jordan",
        estado:"Usada",
        precio:"2300$",
        stock:10,
        img:"/static/media/camisetajordan.359fa6091bbbb28af9b0.png"
    },
    {
        id:3,
        cateogira:'camisetas',
        marca:"Dallas",
        estado:"Usada",
        precio:"2300$",
        stock:20,
        img:"/static/media/basket-dallas.8606fd226b5d791a6b20.png"
    }]

    useEffect(() => {

        if(name=="camisetas"){
            setProducto(arrayCamisetas)
        }else if (name=="zapatillas"){
            setProducto(arrayZapatillas)
        }
        else{
            setProducto(arrayCamisetas.concat(arrayZapatillas))
        }
    }, [name])
    
    return (
                <div className="title-welcome"><ItemList producto={producto}/></div>
    )
}

export default ItemListContainer;
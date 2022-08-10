import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAppContext } from '../../context/AppContext';
import ItemList from './ItemList';

export const ItemListContainer = () => {
	const { products } = useAppContext() /* products X proyects */

	const [proyectCategory, setProductsCategory] = useState([])

	const { proyectoId } = useParams()

	

	useEffect(() => {
		!proyectoId 
			? setProductsCategory(products) 
			: setProductsCategory(
				products.filter((products) => products.category === proyectoId)
				)
	}, [proyectoId, products])
  
	
	return (
		<>			
			<div className='divider'>Mis proyectos</div>
			<ItemList products={proyectCategory}/>   			
		</>
	)
  
  
}

export default ItemListContainer

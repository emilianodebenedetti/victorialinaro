import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { getItem } from '../../firebase/firebaseService'
import  ItemDetail  from './ItemDetail'

export const ItemDetailContainer = () => {
  
    const { products } = useAppContext()
	const [ productSelected, setProductSelected ] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getItem(id).then((item) => 
			setProductSelected({ ...item.data(), id: item.id })
		)
	}, [id, products])

	const [terminar, setTerminar] = useState(false)
	const onAdd = () => {
		setTerminar(true)
	}

    return (
	<>
		<div className="mt-4">
			<div className='divider'>Proyecto en detalle</div>
			<ItemDetail product={productSelected} onAdd={onAdd} terminar={terminar} /> 
		</div>
	</>	
  )
}

export default ItemDetailContainer
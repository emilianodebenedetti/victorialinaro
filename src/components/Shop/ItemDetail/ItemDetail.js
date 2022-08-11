import Carousel from './Carousel';


export const ItemDetail = ({ product }) => {  /* product X proyect */

  return (
        <>
			<div className="bg-cream text-black">
				<div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 flex-row lg:flex-row md:grid-cols-2 ">				
					<Carousel 
						img={product.img} 
						img1={product.img1}
						img2={product.img2}
						img3={product.img3}
						img4={product.img4}
						img5={product.img5}
						img6={product.img6}
						video={product.video}
					/>		 
					<div className='lg:pl-20 text-center md:text-left lg:text-left font-medium lg:text-lg md:text-lg' >						
						<h2 className="text-3xl lg:text-5xl font-bold p-6 pb-10"> {product.name}  </h2>
						{ product.colaboracion ? <p className="space-y-4 py-1 md:py-2 pl-6">COLABORACIÓN:  {product.colaboracion} </p> : <></>}
						{ product.diesño ? <p className="space-y-4 py-1 md:py-2 pl-6"> DISEÑO:  {product.diseño} </p> : <></>}			
						{ product.contenido ? <p className="space-y-4 py-1 md:py-2 pl-6"> CONTENIDO:  {product.contenido} </p> : <></>}
						{ product.makeup ? <p className="space-y-4 py-1 md:py-2 pl-6"> MAKEUP:  {product.makeup} </p> : <></>}
						{ product.hair ? <p className="space-y-4 py-1 md:py-2 pl-6"> HAIR:  {product.hair} </p> : <></>}
						{ product.estilismo ? <p className="space-y-4 py-1 md:py-2 pl-6"> ESTILISMO:  {product.estilismo} </p> : <></>}
						{ product.modelos ? <p className="space-y-4 py-1 md:py-2 pl-6"> MODELOS:  {product.modelos} </p> : <></>}
						{ product.produccion ? <p className="space-y-4 py-1 md:py-2 pl-6"> PRODUCCÍON:  {product.produccion} </p> : <></>}
						{ product.fotografia ? <p className="space-y-4 py-1 md:py-2 pl-6"> FOTOGRAFÍA:  {product.fotografia} </p> : <></>}
						{ product.locacion ? <p className="space-y-4 py-1 md:py-2 pl-6"> LOCACIÓN:  {product.locacion} </p> : <></>}		
					</div>
				</div>
			</div>
		</>
  )
}

export default ItemDetail



import { Item } from '../Item/Item';


export const ItemList = ({ products }) => {

  return (
    <>
      <div className="gap-16 justify-center grid md:grid-rows-2 grid-rows-1 lg:grid-flow-col grid-flow-rows ">
        {products.map((product) => ( 
                <>            
                  <Item 
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    img1={product.img1}
                    key={product.id} 
                  />
                </>
        ))}
      </div>
    </>
  );
}

export default ItemList 

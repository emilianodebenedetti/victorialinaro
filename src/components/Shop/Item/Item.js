import React from 'react'
import { Link } from 'react-router-dom';


export const Item = ({ name, img, img1,  id }) => { 
    return (
       <>
            <Link to={`/item/${id}`} className='rounded-sm' >
                <div className="card w-80 shadow-xl image-full ">{/* borrar card */}
                                          
                    <figure className='shadow-xl '>{img1 ? <img src={img1} className='shadow-xl rounded-none'/> : <img src={img} className='shadow-xl rounded-none'/> }</figure>
                    <div className="card-body">
                        <h2 className="text-center uppercase font-bold italic pt-10">{name}</h2>
                    </div>                   
                </div>
            </Link>
       </>
        
    )
};

export default Item



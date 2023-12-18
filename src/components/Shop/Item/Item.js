import React from 'react'
import { Link } from 'react-router-dom';


export const Item = ({ name, img, img1, id }) => { 
    return (
       <>

            <Link to={`/item/${id}`} >
                <div className="card w-80 max-w-fit shadow-xl image-full h-full ">{/* transition ease-in-out delay-150 hover:scale-110 duration-300 */}
                    {/* <div className="radial-progress animate-spin" style={{"--value":70}}></div> LOADER*/ }                   
                    <figure className='shadow-xl rounded '>
                        {
                            img1 
                            ? <img src={img1} className='shadow-xl h-full hover:scale-110' alt='Imagen carrusel'/> 
                            : <img src={img} className='shadow-xl rounded-none h-full hover:scale-110' alt='Imagen carrusel'/>                                                     
                        }
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center uppercase italic pt-10">{name}</h2>
                    </div>                   
                </div>
            </Link>
       </>
    )
};

export default Item



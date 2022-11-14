import React from 'react'

const About = () => {
  return (
    
    <>
        <div className="bg-grey text-black">

          <div className="hero-content card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

            <div className="inline carousel carousel-center max-w-sm space-x-4 bg-grey shadow-xl m-auto">            
              <img className='lg:w-96 md:w-80 w-64 h-auto full-image' src='https://firebasestorage.googleapis.com/v0/b/portfolio-victoria.appspot.com/o/Presentaci%C3%B3n%2Fimg-presentacion-victoria.jpg?alt=media&token=33c2cdf2-dc69-46fe-baff-9b4e282a3536' />             
            </div>	
            
            <div className='text-center lg:text-lg md:text-lg bg-grey'>
              <h1 className='text-2xl font-semibold'>SOBRE MI</h1>
              <br/>
              <p>
                Hola soy Victoria, productora y comunicadora de moda uruguaya, 
                fanatica de este mundito de la moda y la comunicación en las redes 
                conectándolo en mi día a día. 
              </p> 
              <br/>
              <p>
                Este es mi lugar en donde público mis 
                trabajos y proyectos personales, también podes contactarte directamente 
                escribiendo un mensaje si te interesa generar algo conmigo :)</p>
            </div> 
          
          </div>
        </div>

    </>
  )
}

export default About
import React from 'react'

const Contact = () => {
  return (
    <>
      <div class="md:mx-20 lg:mx-40 mt-8 flex flex-col justify-center phone-3 bg-grey1 shadow-lg rounded-2xl">{/* cambiar a beige */}
		<h2 className='text-center text-black text-xl p-10'>Llena el formulario para contactarme!</h2>
		<form
/* 		onSubmit={handlerSubmit}
			onChange={handlerChange} */
			className="flex flex-col justify-center mb-3 mx-8 "
		>
			<input 
				type="email" 
				placeholder="Email" 
				name="email"
				class="w-full mx-auto mb-2 text-center input input-bordered input-lila w-full max-w-xl bg-white" 
			/>
			<input 
				type="message" 
				placeholder="Deja tu mensaje!" 
				name="message"
				class="w-full mx-auto mb-2 text-center input input-bordered input-lila w-full max-w-xl bg-white" 
			/>
									

			<button className="mx-auto w-full btn d-block mt-2 bg-lila hover:bg-lila1 text-white max-w-xl border-none">
				Enviar mensaje
			</button>
		</form>									
		</div>
    </>
  )
}

export default Contact
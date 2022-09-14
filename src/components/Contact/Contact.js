import React from 'react'
import emailjs from '@emailjs/browser'; 

const Contact = () => {

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs.sendForm('default_service', 'template_vhy26ge', '#form', '-x4thOHgvspSzXeeB') /* 1: id emailjs service,2: template id del msg, 3:datos del form, 4: userId, de api keys  */
		.then(response => console.log(response))
		.catch(error => console.log(error))
	}

  return (
    <>
      <div className="md:mx-20 lg:mx-40 mt-8 flex flex-col justify-center phone-3 bg-grey1 shadow-lg rounded-2xl">{/* cambiar a beige */}
		<h2 className='text-center text-black text-xl p-10'>Llena el formulario para contactarme!</h2>
		<form
			id='form'
			className="flex flex-col justify-center mb-3 mx-8 "
			onSubmit={sendEmail}
		>
			<input 
				type="name" 
				placeholder="Nombre" 
				name="name"
				className="w-full mx-auto mb-2 text-center input input-bordered input-lila w-full max-w-xl bg-white" 
			/>
			<input 
				type="email" 
				placeholder="Email" 
				name="email"
				className="w-full mx-auto mb-2 text-center input input-bordered input-lila w-full max-w-xl bg-white" 
			/>
			<textarea 
				type="message" 
				placeholder="Deja tu mensaje!" 
				name="message"
				className="w-full mx-auto mb-2 text-center input input-bordered input-lila w-full max-w-xl bg-white" 
			/>									
			<button type="submit"  className="mx-auto w-full btn d-block mt-2 bg-lila hover:bg-lila1 text-white max-w-xl border-none">
				Enviar mensaje
			</button>
		</form>									
		</div>
    </>
  )
}

export default Contact
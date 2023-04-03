import { Layout } from '@/layout/Layout'
import React from 'react'

export default function TermsAndConditionsPage() {
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<div className=' absolute left-5 top-3'>
					<img src='./img/logo-beta.png' alt='Logo Larri' className='w-32' />
				</div>
				<div className='w-1/2 h-screen px-14 flex items-center'>
					<div>
						<h1 className='text-5xl font-bold text-newDark'>
							Términos y <span className='text-primary'>Condiciones</span> de Larri{' '}
							<span className='text-primary'>AI</span>
						</h1>
						<div className='mt-8 font-medium text-gray-500 text-sm space-y-5 text-justify'>
							<p>
								Bienvenido a larri-ai.com. Al utilizar nuestro sitio web, aceptas los
								siguientes términos y condiciones. Si no estás de acuerdo con estos
								términos y condiciones, no utilices el sitio.
							</p>
							<p>
								Uso del API de OpenAI. El API de OpenAI se utiliza en larri-ai.com
								para crear un asistente educativo para estudiantes. Al utilizar
								nuestro sitio web, aceptas que tu uso del API de OpenAI estará sujeto
								a los términos y condiciones de OpenAI.
							</p>
							<p>
								Pasarela de pago de Iventium. larri-ai.com utiliza la pasarela de
								pago de Iventium, LLC. para procesar los pagos del plan de membresía.
								Al utilizar nuestro sitio web, aceptas que tu uso de la pasarela de
								pago de Iventium, estará sujeto a los términos y condiciones de
								Iventium, LLC..
							</p>
							<p>
								Plan de membresía. larri-ai.com ofrece un plan de membresía pago que
								dura 30 días. Al utilizar nuestro sitio web, aceptas los términos y
								condiciones del plan de membresía.
							</p>
							<p>
								Propiedad intelectual y derechos de autor. Todo el contenido en
								larri-ai.com es propiedad intelectual de larri-ai.com o sus
								respectivos propietarios. No puedes utilizar el contenido en nuestro
								sitio web sin nuestro permiso previo por escrito.
							</p>
							<p>
								Privacidad. larri-ai.com respeta tu privacidad y se compromete a
								proteger tus datos personales. Consulta nuestra política de
								privacidad para obtener más información sobre cómo manejamos tus
								datos personales.
							</p>
							<p>
								Si tienes alguna pregunta o inquietud sobre nuestros términos y
								condiciones, no dudes en contactarnos.
							</p>
						</div>
					</div>
				</div>
				<div className='w-1/2 h-screen hidden lg:block'>
					<img
						src='/img/feature4.jpg'
						alt='feature 4 image'
						className='w-full h-full'
						loading='lazy'
					/>
				</div>
			</div>
		</Layout>
	)
}

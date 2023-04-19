import { Layout } from '@/layout/Layout'
import React from 'react'

export default function index() {
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				{/* <div className=' absolute left-5 top-3'>
					<img src='./img/logo-beta.png' alt='Logo Larri' className='w-32' />
				</div> */}
				<div className='w-1/2 h-screen px-14 flex items-center'>
					<div>
						<h1 className='text-5xl font-bold text-newDark'>
							<span className='text-primary'>Política</span> de Privacidad
						</h1>
						<div className='mt-8 font-medium text-gray-500 text-sm space-y-5 text-justify'>
							<p>
								La presente Política de Privacidad establece los términos en que
								larri-ai.com usa y protege la información que es proporcionada por
								sus usuarios al momento de utilizar su sitio web. Estamos
								comprometidos con la seguridad de los datos de los usuarios. Cuando
								le pedimos llenar los campos de información personal con la cual
								usted pueda ser identificado, lo hacemos asegurando que sólo se
								empleará de acuerdo con los términos de este documento.
							</p>
							<p>
								La información que se recaba. Nuestro sitio web podrá recoger
								información personal por ejemplo: Nombre, información de contacto
								como su dirección de correo electrónica e información demográfica.
								Así mismo cuando sea necesario podrá ser requerida información
								específica para procesar algún pedido o realizar una entrega o
								facturación.
							</p>
							<p>
								Uso de la información recogida. Nuestro sitio web emplea la
								información con el fin de proporcionar el mejor servicio posible,
								particularmente para mantener un registro de usuarios, de pedidos en
								caso que aplique, y mejorar nuestros productos y servicios. Es
								posible que sean enviados correos electrónicos periódicamente a
								través de nuestro sitio con ofertas especiales, nuevos productos y
								otra información publicitaria que consideremos relevante para usted o
								que pueda brindarle algún beneficio.
							</p>
							<p>
								Cookies. Una cookie se refiere a un fichero que es enviado con la
								finalidad de solicitar permiso para almacenarse en su ordenador, al
								aceptar dicho fichero se crea y la cookie sirve entonces para tener
								información respecto al tráfico web, y también facilita las futuras
								visitas a una web recurrente. Otra función que tienen las cookies es
								que con ellas las web pueden reconocerte individualmente y por tanto
								brindarte el mejor servicio personalizado de su web.
							</p>
							<p>
								Control de su información personal. En cualquier momento usted puede
								restringir la recopilación o el uso de la información personal que es
								proporcionada a nuestro sitio web. Cada vez que se le solicite
								rellenar un formulario, como el de alta de usuario, puede marcar o
								desmarcar la opción de recibir información por correo electrónico. En
								caso de haber marcado la opción de recibir nuestro boletín o
								publicidad usted puede cancelarla en cualquier momento. Esta compañía
								no venderá, cederá ni distribuirá la información personal que es
								recopilada sin su consentimiento, salvo que sea requerido por un juez
								con un orden judicial.
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

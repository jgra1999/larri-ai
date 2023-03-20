import React from 'react'
import { Layout } from '@/layout/Layout'
import { PricingCard } from './PricingCard'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'

type eButton = React.MouseEvent<HTMLButtonElement, MouseEvent>

export function Pricing() {
	const router = useRouter()

	const updatePlan = async (e: eButton) => {
		if (e.currentTarget.textContent === 'Comienza ahora') {
			try {
				const {
					data: { user }
				} = await supabase.auth.getUser()

				const { error } = await supabase
					.from('profiles')
					.update({ free_plan: true })
					.eq('user_id', user?.id)
			} catch (error) {
				console.error(error)
			}
			router.push('/chat')
		} else {
			router.push('/checkout')
		}
	}

	return (
		<Layout title='Larri Ai - Seleccionar Plan' showHeader={false}>
			<div className='flex flex-col lg:flex-row justify-between items-center relative bg-white'>
				<div className='absolute left-5 top-3'>
					<img src='./img/logo.png' alt='Logo Larri' className='w-24 md:w-28' />
				</div>
				<div className='lg:w-3/4 xl:w-[45%] space-y-6 2xl:ml-12 p-6 my-32'>
					<h2 className='font-bold text-5xl sm:text-6xl'>
						Elige tu <span className='text-primary'>Plan</span>
					</h2>
					<p className='font-medium sm:text-lg text-gray-500'>
						Inicia tu periodo de prueba de una semana para que puedas evaluar las
						habilidades de Larri. El plan de pago mensual ofrece más recursos y una
						mayor flexibilidad.
					</p>
				</div>

				<div className=' w-full xl:h-screen xl:w-[55%] bg-primary flex flex-wrap items-center justify-around py-8 gap-y-10'>
					<PricingCard
						plan='Prueba Gratis'
						description='Experimenta la versatilidad de la herramienta con los 7 días de prueba gratuita.'
						price='$0.00'
					>
						<>
							<button
								className='py-2 px-4 rounded-lg w-full text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'
								onClick={updatePlan}
							>
								Comienza ahora
							</button>
							<ul className='space-y-2'>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Uso de la
									IA
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> 7 días de
									duración
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Cantidad de
									uso limitado
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Sin soporte
									técnico
								</li>
							</ul>
						</>
					</PricingCard>

					<PricingCard
						plan='Plan mensual'
						description='Explora sin limites ni restricciones todo el potencial de Larri.'
						price='$2.00'
					>
						<>
							<button
								className='py-2 px-4 rounded-lg w-full text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'
								onClick={updatePlan}
							>
								Métodos de Pago
							</button>
							<ul className='space-y-2'>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Uso de la
									IA
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> 30 días de
									duración
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Uso
									ilimitado
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' /> Soporte
									técnico
								</li>
							</ul>
						</>
					</PricingCard>
				</div>
			</div>
		</Layout>
	)
}

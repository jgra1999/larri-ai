import React from 'react'
import Link from 'next/link'

/* componentes */
import { Layout } from '@/layout/Layout'
import { CheckoutCard } from '@/components/CheckoutCard'

/* icons */
import { BinanceIcon, ZinliIcon } from '@/components/Icons'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import { CheckoutForm } from '@/components/checkout/CheckoutForm'

export default function index() {
	return (
		<Layout title='Larri Ai - Checkout' showHeader={false}>
			<div className='flex flex-col lg:flex-row justify-between items-center relative bg-primary'>
				<Link href='/' className='absolute left-5 top-3'>
					<img
						src='./img/logo-white.png'
						alt='Logo Larri'
						className='w-24 md:w-28'
					/>
				</Link>
				<div className='w-full  lg:w-[45%] 2xl:ml-12 p-6 my-32 lg:my-auto'>
					<div className='space-y-6 mt-5'>
						<h2 className='font-bold text-5xl'>
							Elige tu <span className='text-white'>Método de Pago</span>
						</h2>
					</div>

					<div className='flex flex-col justify-center items-center gap-y-10 mt-20 lg:mt-12'>
						<CheckoutCard
							name='Pago Movil'
							icon={<DevicePhoneMobileIcon className='w-10 h-10 text-cyan-400' />}
							message='04244249053'
							notification='Teléfono copiado'
						>
							<div className='font-normal text-gray-500 xl:text-sm space-y-1 text-left'>
								<p>BBVA Provincial</p>
								<p>C.I: 27362647</p>
								<p>tlf: 0424-4249053</p>
							</div>
						</CheckoutCard>
						<CheckoutCard
							name='Zinli'
							icon={<ZinliIcon />}
							message='jgra11.2010@gmail.com'
							notification='Email copiado'
						>
							<div className='font-normal text-gray-500 xl:text-sm text-left'>
								<p>email: jgra11.2010@gmail.com</p>
							</div>
						</CheckoutCard>
						<CheckoutCard
							name='Binance USDT'
							icon={<BinanceIcon />}
							message='jgra11.2010@gmail.com'
							notification='Email copiado'
						>
							<div className='font-normal text-gray-500 xl:text-sm text-left'>
								<p>email: jgra11.2010@gmail.com</p>
							</div>
						</CheckoutCard>
					</div>
				</div>

				<div className='w-full lg:h-screen lg:w-[55%] bg-white flex flex-wrap items-center justify-around py-8 gap-y-10'>
					<CheckoutForm />
				</div>
			</div>
		</Layout>
	)
}

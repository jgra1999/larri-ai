import Link from 'next/link'

import { Layout } from '../layout/Layout'
import { Footer } from '@/layout/Footer'
import { Options } from '@/layout/Options'

export default function Home() {
	return (
		<Layout title='Larri AI - Inicio'>
			<>
				<main>
					<div className='flex flex-col gap-y-5 items-center text-center mt-10'>
						<h2 className='text-5xl font-bold text-newDark'>
							Aprender sin <span className='text-primary'>Límites</span>
						</h2>
						<p className='text-gray-500 text-lg w-3/4'>
							Asistencia educativa virtual con inteligencia artificial
						</p>
						<Link
							href='/chat'
							className='bg-primary text-newDark rounded-xl py-3 px-6 font-bold text-lg hover:text-white transition-colors duration-200'
						>
							Empezar Ahora
						</Link>
					</div>

					<div className='bg-white shadow-md h-[550px] w-4/5 mx-auto container rounded-xl mt-8 flex justify-center items-center'>
						<img src='./img/img.jpg' alt='' className='w-full h-[510px]' />
					</div>

					<div className='h-52 '></div>

					<Options />
				</main>
				<Footer />
			</>
		</Layout>
	)
}

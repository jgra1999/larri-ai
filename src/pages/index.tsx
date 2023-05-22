import Link from 'next/link'

import { Layout } from '../layout/Layout'
import { Footer } from '@/layout/Footer'
import { Options } from '@/layout/Options'

import { MotionImage } from '@/components/animations/MotionImage'
import { MotionDiv } from '@/components/animations/MotionDiv'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
	const [maintenanceMode, setMaintenanceMode] = useState(true)
	return (
		<Layout
			title='Larri AI - Inicio'
			showHeader={true}
			bg={false}
			googleIndex={true}
			metaDescription='Larri es una inteligencia artificial con fines educativos que ayuda a los estudiantes con sus tareas y trabajos de investigación.'
			metaKeywords='inteligencia artificial, Larri, educación, tareas, investigación'
		>
			<>
				<main>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, type: 'tween' }}
						className='flex flex-col gap-y-5 items-center text-center mt-10'
					>
						<h1 className='text-5xl font-bold text-newDark'>
							Aprende sin <span className='text-primary'>Límites</span>
						</h1>
						<p className='text-gray-400 text-lg w-3/4 font-medium'>
							Asistencia educativa virtual con inteligencia artificial
						</p>
						<Link
							href='/chat'
							className='py-2 px-4 rounded-lg text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'
						>
							Empezar Ahora
						</Link>
					</motion.div>
					<div className='bg-white max-h-[600px] w-11/12 shadow-md mx-auto container rounded-xl my-10 flex justify-center items-center'>
						<video
							className='max-h-[600px] w-11/12'
							autoPlay
							loop
							muted
							poster='/img/poster.png'
						>
							<source
								src='https://res.cloudinary.com/hothra/video/upload/v1678990923/Larri-AI/home-video_adspfd.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
					<section className='w-full flex flex-col gap-y-10 lg:gap-x-10 md:flex-row justify-around items-center bg-white px-8 md:px-16 py-10'>
						<MotionDiv>
							<h2 className='font-bold text-4xl lg:text-6xl'>
								Escribe tus <span className='text-primary'>dudas</span>
							</h2>
							<p className='text-gray-500 font-medium text-sm md:text-base'>
								El trabajo de Larri consiste en ayudar a las personas a encontrar
								información y recursos para su educación, tareas y proyectos de
								investigación.
							</p>
						</MotionDiv>
						<div className='flex-1'>
							<MotionImage
								imgUrl='https://res.cloudinary.com/hothra/image/upload/v1684518800/Larri-AI/feature-1.png'
								imgAlt='Feature 1 larri image'
							/>
						</div>
					</section>
					<section className='w-full flex flex-col gap-y-10 lg:gap-x-10 md:flex-row justify-around items-center bg-zinc-900 px-8 md:px-16 py-10'>
						<div className='flex-1 order-2 md:order-1'>
							<MotionImage
								imgUrl='https://res.cloudinary.com/hothra/image/upload/v1684518800/Larri-AI/feature2_e6ivxa.png'
								imgAlt='Feature 2 larri image'
							/>
						</div>
						<MotionDiv css='order-1 md:order-2'>
							<h2 className='font-bold text-4xl lg:text-6xl text-white'>
								<span className='text-primary'>Infinidad</span> de recursos
							</h2>
							<p className='text-gray-100 font-medium text-sm md:text-base'>
								La información que usa Larri proviene de varias fuentes, incluyendo
								investigaciones académicas, estudios de caso, informes de expertos,
								revistas y libros. También busca información en línea, como sitios
								web, blogs y foros.
							</p>
						</MotionDiv>
					</section>
					<section className='w-full flex flex-col gap-y-10 lg:gap-x-10 md:flex-row justify-around items-center bg-white px-8 md:px-16 py-10 xl:min-h-[755px]'>
						<MotionDiv>
							<h2 className='font-bold text-4xl lg:text-[58px] leading-tight'>
								Aprendizaje, <span className='text-primary'>Innovación</span> y
								Crecimiento
							</h2>
							<p className='text-gray-500 font-medium text-sm md:text-base'>
								Larri puede ayudarte con materias como matemáticas, ciencias,
								historia, lenguaje y literatura. También puede ayudar con temas
								relacionados con la investigación, como la recopilación de datos, el
								análisis de datos y la redacción de trabajos.
							</p>
						</MotionDiv>
						<div className='flex-1'>
							<MotionImage
								imgUrl='https://res.cloudinary.com/hothra/image/upload/v1684518801/Larri-AI/feature3_px4kqb.png'
								imgAlt='Feature 3 larri image'
							/>
						</div>
					</section>
					<Options />
				</main>
				<Footer />
			</>
		</Layout>
	)
}

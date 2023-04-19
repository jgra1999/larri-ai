import { Layout } from '@/layout/Layout'
import React from 'react'

export default function Custom404() {
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<div className=' absolute left-5 top-3'>
					<img src='./img/logo-beta.png' alt='Logo Larri' className='w-32' />
				</div>
				<div className='w-1/2 h-screen px-14 flex items-center'>
					<div>
						<h1 className='text-8xl font-bold text-newDark'>
							ERROR 4<span className='text-primary'>0</span>4
						</h1>
						<p className='mt-8 font-medium text-gray-500'>
							La página que buscas no se encuentra aquí.
						</p>
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

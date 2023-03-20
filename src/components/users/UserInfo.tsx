import { Layout } from '@/layout/Layout'
import React from 'react'
import { Form } from './Form'

export function UserInfo() {
	return (
		<Layout title='Larri Ai - Completar Perfil' showHeader={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<div className='absolute left-5 top-3'>
					<img src='./img/logo.png' alt='Logo Larri' className='w-28' />
				</div>
				<Form />
				<div className='h-screen w-1/2 bg-primary hidden lg:block'></div>
			</div>
		</Layout>
	)
}

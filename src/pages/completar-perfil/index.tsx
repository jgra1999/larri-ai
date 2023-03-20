import Link from 'next/link'
import { Layout } from '@/layout/Layout'
import { Form } from '@/components/users/Form'

export default function CompleteProfilePage() {
	return (
		<Layout title='Larri Ai - Completar Perfil' showHeader={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<Link href='/' className=' absolute left-5 top-3'>
					<img src='./img/logo.png' alt='Logo Larri' className='w-28' />
				</Link>
				<Form />
				<div className='w-1/2 h-screen hidden lg:block'>
					<img
						src='/img/feature4.png'
						alt='feature 4 image'
						className='w-full h-full'
					/>
				</div>
				{/* <div className='h-screen w-1/2 bg-primary hidden lg:block'></div> */}
			</div>
		</Layout>
	)
}

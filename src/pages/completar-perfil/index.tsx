import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'

import { Layout } from '@/layout/Layout'
import { UserForm } from '@/components/users/UserForm'

export default function CompleteProfilePage() {
	const router = useRouter()

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const {
					data: { user }
				} = await supabase.auth.getUser()

				const { data, error } = await supabase
					.from('profiles')
					.select()
					.eq('user_id', user?.id)

				if (data?.length === 1) {
					router.push('/perfil')
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchUserData()
	}, [])
	return (
		<Layout
			title='Larri Ai - Completar Perfil'
			showHeader={false}
			googleIndex={false}
		>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<div className=' absolute left-5 top-3'>
					<img src='./img/logo-beta.png' alt='Logo Larri' className='w-32' />
				</div>
				<UserForm />
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

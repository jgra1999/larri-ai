import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'
import { useUserStore } from '@/store/user'

import { Layout } from '@/layout/Layout'

export default function ProfilePage() {
	const router = useRouter()
	const { profile, setProfile, logout } = useUserStore()
	const [planExpired, setPlanExpired] = useState(false)

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

				if (data?.length === 0 || data === null) {
					router.push('/completar-perfil')
				}

				setProfile(data?.[0])
			} catch (error) {
				console.error(error)
			}
		}

		if (!profile?.user_id) {
			fetchUserData()
		}
		if (profile?.free_plan) {
			const current_date = new Date()
			const plan_duration = 7 * 24 * 60 * 60 * 1000
			const last_update_date = new Date(profile?.updated_at)

			if (current_date.getTime() - last_update_date.getTime() >= plan_duration) {
				setPlanExpired(true)
			}
		}

		if (profile?.payment_plan) {
			const current_date = new Date()
			const plan_duration = 30 * 24 * 60 * 60 * 1000
			const last_update_date = new Date(profile?.updated_at)

			if (current_date.getTime() - last_update_date.getTime() >= plan_duration) {
				setPlanExpired(true)
			}
		}
	}, [])

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut()
		logout()
		router.push('/')

		console.error(error)
	}

	//TODO: acomodar esta ruta, deberia de ser una ruta dinamica
	return (
		<Layout
			title='Larri Ai - Perfil'
			showHeader={true}
			bg={true}
			googleIndex={false}
		>
			<div className='w-full h-full bg-white'>
				<div className='bg-primary w-full h-96 flex flex-col justify-center items-center gap-y-4'>
					<img src='/img/default-img.png' alt='User img' className='w-36' />
					<div className='text-white'>
						<p className='font-bold text-2xl'>{profile?.full_name}</p>
					</div>
				</div>
				<div className=' w-11/12 container mx-auto p-8 space-y-20 h-full'>
					<div className='flex flex-col sm:flex-row gap-y-5 justify-between'>
						<div className='space-y-2'>
							<h5 className='text-4xl font-bold'>Dashboard</h5>
						</div>
						<div>
							<Link
								href='/chat'
								className='py-3 px-8 rounded-lg text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200'
							>
								Ir al chat
							</Link>
						</div>
					</div>

					{planExpired === false ? (
						<div className='text-center'>
							<p className='text-gray-400 font-medium text-5xl'>
								{profile?.payment_plan ? 'Plan de 30 días' : 'Plan gratuito'}
							</p>
						</div>
					) : (
						<div className='text-center'>
							<p className='text-red-500 font-medium text-5xl'>Plan vencido</p>
							<p>
								<a
									href='https://iventium.com/producto/larri-ia-suscripcion/'
									className='py-3 px-8 rounded-lg text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200'
								>
									Actualizar plan
								</a>
							</p>
						</div>
					)}

					<div className='flex flex-wrap gap-5'>
						<button
							onClick={handleLogout}
							className='bg-gray-200 px-8 py-2 rounded-lg font-bold'
						>
							Cerrar sesión
						</button>

						<a
							href='mailto:soporte@larri-ai.com'
							target='_blank'
							className='bg-gray-200 px-8 py-2 rounded-lg font-bold'
						>
							Soporte técnico
						</a>
					</div>
				</div>
			</div>
		</Layout>
	)
}

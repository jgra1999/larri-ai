import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'
import { useUserStore } from '@/store/user'

import { Layout } from '@/layout/Layout'

type DaysRef = HTMLSpanElement | null

export default function ProfilePage() {
	const router = useRouter()
	const { profile, setProfile, logout } = useUserStore()
	const days = useRef<DaysRef>(null)

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

				if (data?.length === 0) {
					router.push('/completar-perfil')
				}

				setProfile(data?.[0])
			} catch (error) {
				console.error(error)
			}
		}

		if (!profile) {
			fetchUserData()
		}

		if (profile?.days <= 3) {
			days.current?.classList.add('text-red-700')
		}

		if (profile?.days > 4 && profile.days <= 10) {
			days.current?.classList.add('text-yellow-400')
		}

		if (profile?.days > 10) {
			days.current?.classList.add('text-green-600')
		}
	}, [])

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut()
		router.push('/')
		logout()

		console.error(error)
	}

	return (
		<Layout title='Larri Ai - Perfil' showHeader={true} bg={true}>
			<div className='w-full h-full'>
				<div className='bg-primary w-full h-96 flex flex-col justify-center items-center gap-y-4 relative'>
					<img src='/img/default-img.png' alt='User img' className='w-36' />
					<div className='text-white'>
						<p className='font-bold text-2xl'>{profile?.full_name}</p>
					</div>
					<div className='bg-white rounded-lg w-11/12 container mx-auto shadow mt-20 p-8 absolute -bottom-[335px] sm:-bottom-[325px] space-y-10'>
						<div className='flex flex-col sm:flex-row gap-y-5 justify-between'>
							<div className='space-y-2'>
								<h5 className='text-4xl font-bold'>Dashboard</h5>
								<p className='text-gray-400 font-medium text-sm'>
									{profile?.payment_plan ? 'Plan de 30 días' : 'Plan gratuito'}
								</p>
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

						<div className='text-center'>
							<p className='font-medium text-lg text-gray-400'>
								<span className='text-9xl' ref={days}>
									{profile?.days}
								</span>{' '}
								días restantes
							</p>
						</div>

						<div className='flex flex-wrap gap-5'>
							<button
								onClick={handleLogout}
								className='bg-gray-200 px-8 py-2 rounded-lg font-bold'
							>
								Cerrar sesión
							</button>

							<a
								href='mailto:larri.soporte@gmail.com'
								target='_blank'
								className='bg-gray-200 px-8 py-2 rounded-lg font-bold'
							>
								Soporte técnico
							</a>
						</div>

						{profile?.days <= 3 ? (
							<div className='w-full text-center'>
								<p className='text-gray-400 font-medium text-xs'>
									No olvides cancelar tu mensualidad.
								</p>
							</div>
						) : (
							''
						)}

						{profile?.days <= 0 ? (
							<div className='w-full text-center -mb-3'>
								<p className='text-gray-400 font-medium text-xs'>
									<Link href='/checkout' className='hover:text-primary'>
										Haz clic aquí para actualizar tu mensualidad
									</Link>
									<br />
									Si reportaste tu pago, el equipo debe estar confirmando el pago.
								</p>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}

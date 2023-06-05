import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'
import { useUserStore } from '@/store/user'

import { Layout } from '@/layout/Layout'

import { LoadingIconTwo } from '@/components/Icons'

import en from 'public/lang/en'
import es from 'public/lang/es'

export default function ProcessPage() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es
	const { profile, setProfile, logout } = useUserStore()
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

				setProfile(data?.[0])

				if (data?.length === 0 || data === null) {
					router.push('/complete-profile')
				} else {
					// router.push('/perfil')
					router.push('/')
				}
			} catch (error) {
				console.error(error)
			}
		}

		if (!profile?.user_id) {
			fetchUserData()
		}
	}, [])
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div>
				<div className=' absolute left-5 top-3'>
					<img
						src='https://res.cloudinary.com/hothra/image/upload/v1685574183/logo_rip0fl.png'
						alt='Logo Larri'
						className='w-28'
					/>
				</div>
				<div className='container mx-auto flex items-start justify-center gap-x-1 w-full mt-64 text-center'>
					<div>
						<h5 className='text-4xl xs:text-5xl font-bold'>{t.processMessage1}</h5>
						<p className='font-medium text-gray-400 text-xs mt-1'>
							{t.processMessage2}
						</p>
					</div>
					<LoadingIconTwo />
				</div>
			</div>
		</Layout>
	)
}

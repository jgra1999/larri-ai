import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/client'
import { useUserStore } from '@/store/user'

import { Layout } from '@/layout/Layout'

import { LoadingIconTwo } from '@/components/Icons'

export default function ProcessPage() {
	const router = useRouter()
	const { profile, setProfile, logout } = useUserStore()
	useEffect(() => {
		const fetchUserData = async () => {
			console.log('fetch')

			try {
				const {
					data: { user }
				} = await supabase.auth.getUser()
				console.log('🚀 ~ file: index.tsx:18 ~ fetchUserData ~ user :', user)

				const { data, error } = await supabase
					.from('profiles')
					.select()
					.eq('user_id', user?.id)
				console.log('🚀 ~ file: index.tsx:25 ~ fetchUserData ~ data:', data)

				setProfile(data?.[0])

				if (data?.length === 0) {
					router.push('/completar-perfil')
				} else {
					router.push('/perfil')
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
					<img src='./img/logo-beta.png' alt='Logo Larri' className='w-28' />
				</div>
				<div className='container mx-auto flex items-start justify-center gap-x-1 w-full mt-64 text-center'>
					<div>
						<h5 className='text-4xl xs:text-5xl font-bold'>Procesando Petición</h5>
						<p className='font-medium text-gray-400 text-xs mt-1'>
							pronto seras redirigido...
						</p>
					</div>
					<LoadingIconTwo />
				</div>
			</div>
		</Layout>
	)
}

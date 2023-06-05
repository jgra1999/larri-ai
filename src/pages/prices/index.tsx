import Link from 'next/link'
import { useRouter } from 'next/router'
import { PricingCard } from '@/components/users/PricingCard'
import { Layout } from '@/layout/Layout'
import { useUserStore } from '@/store/user'
import { supabase } from '@/supabase/client'
import { CheckIcon } from '@heroicons/react/24/outline'

import en from 'public/lang/en'
import es from 'public/lang/es'

type eButton = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function PricingPage() {
	const { profile, setProfile } = useUserStore()
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es

	// useEffect(() => {
	// 	const fetchUserData = async () => {
	// 		try {
	// 			const {
	// 				data: { user }
	// 			} = await supabase.auth.getUser()

	// 			const { data, error } = await supabase
	// 				.from('profiles')
	// 				.select()
	// 				.eq('user_id', user?.id)

	// 			if (data?.length === 0) {
	// 				router.push('/complete-profile')
	// 			}

	// 			setProfile(data?.[0])
	// 		} catch (error) {
	// 			console.error(error)
	// 		}
	// 	}

	// 	if (!profile?.user_id) {
	// 		fetchUserData()
	// 	}
	// }, [])

	// const updatePlan = async (e: eButton) => {
	// 	if (e.currentTarget.textContent === 'Comienza ahora') {
	// 		try {
	// 			const {
	// 				data: { user }
	// 			} = await supabase.auth.getUser()

	// 			const { error } = await supabase
	// 				.from('profiles')
	// 				.update({ free_plan: true, days: 3 })
	// 				.eq('user_id', user?.id)
	// 		} catch (error) {
	// 			console.error(error)
	// 		}
	// 		router.push('/chat')
	// 	} else {
	// 		router.push('https://iventium.com/producto/larri-ia-suscripcion/')
	// 	}
	// }
	return (
		<Layout
			title='Larri Ai - Seleccionar Plan'
			metaDescription='Aprovecha al máximo el poder de larri con nuestros planes de uso. Ofrecemos una prueba gratuita y una membresía mensual de solo 2$.'
			showHeader={false}
			googleIndex={true}
		>
			<div className='flex flex-col lg:flex-row justify-between items-center relative bg-white'>
				<div className=' absolute left-5 top-3'>
					<Link href='/' passHref>
						<img
							src='https://res.cloudinary.com/hothra/image/upload/v1685574183/logo_rip0fl.png'
							alt='Logo Larri'
							className='w-32'
						/>
					</Link>
				</div>
				<div className='lg:w-3/4 xl:w-[45%] space-y-6 2xl:ml-12 p-6 my-32'>
					<h2 className='font-bold text-5xl sm:text-6xl'>
						{t.titlePricePage}
						<span className='text-primary'>Plan</span>
					</h2>
					<p className='font-medium text-gray-400 max-w-[570px]'>
						{t.descriptionPricePage}
					</p>
				</div>

				<div className='w-full h-screen xl:w-[55%] bg-primary flex flex-wrap items-center justify-around py-8 gap-y-10'>
					<PricingCard
						plan='Free'
						description={t.cardPriceFreeDescription}
						price='$0.00'
					>
						<>
							<div className='py-2 px-4 rounded-lg w-full text-lg bg-gray-300 font-bold text-white flex justify-center cursor-not-allowed'>
								{t.cardPriceFreeButtonText}
							</div>
							{/* {profile?.free_plan ? (
								<div className='py-2 px-4 rounded-lg w-full text-lg bg-gray-300 font-bold text-white flex justify-center cursor-not-allowed'>
									Plan actual
								</div>
							) : (
								<button className='py-2 px-4 rounded-lg w-full text-lg bg-primary font-bold text-white hover:bg-[#fe984f] transition-colors duration-200 flex justify-center'>
									Comienza ahora
								</button>
							)} */}
							<ul className='space-y-2'>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardFreeListItem1}
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardFreeListItem2}
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardFreeListItem3}
								</li>
							</ul>
						</>
					</PricingCard>

					<PricingCard
						plan='Pro (Coming soon)'
						description={t.cardPriceProDescription}
						price='$1.99'
					>
						<>
							<div className='py-2 px-4 rounded-lg w-full text-lg bg-gray-300 font-bold text-white transition-colors duration-200 flex justify-center'>
								{t.cardPriceProButtonText}
							</div>
							<ul className='space-y-2'>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardProListItem1}
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardProListItem2}
								</li>
								<li className='flex gap-x-2 text-sm text-gray-500 font-medium'>
									<CheckIcon className='w-5 h-5 text-primary stroke-2' />{' '}
									{t.cardProListItem3}
								</li>
							</ul>
						</>
					</PricingCard>
				</div>
			</div>
		</Layout>
	)
}

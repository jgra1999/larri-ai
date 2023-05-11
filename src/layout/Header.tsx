import Link from 'next/link'
import { useUserStore } from '@/store/user'

import { GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/solid'

type HeaderProps = {
	bgWhiteColor?: boolean
}

export function Header({ bgWhiteColor }: HeaderProps) {
	const { profile } = useUserStore()

	return (
		<nav
			className={`flex justify-between px-2 sm:px-7 py-5 ${
				bgWhiteColor ? 'bg-white' : ''
			}`}
		>
			<Link href='/'>
				<img
					src='./img/logo-beta.png'
					alt='Logo Larri'
					width='144'
					height='81'
					className='w-36'
				/>
			</Link>
			<div className='flex items-center gap-x-3 text-xs sm:gap-x-8 sm:text-lg font-medium text-gray-500'>
				{/* <div className='flex items-center gap-x-1 group'>
					<span className='font-bold group-hover:text-primary transition-colors duration-200'>
						ES
					</span>
					<GlobeAltIcon className='h-6 w-6 group-hover:text-primary transition-colors duration-200' />
				</div> */}

				<Link
					href='/planes'
					className='hover:text-primary transition-colors duration-200'
				>
					Precios
				</Link>
				<a
					href='https://docs.larri-ai.com/'
					target='_blank'
					className='hover:text-primary transition-colors duration-200'
				>
					Guía
				</a>

				{profile?.user_id ? (
					<Link href='/perfil' passHref>
						<UserCircleIcon className='h-7 w-7 text-gray-400 hover:text-primary transition-colors duration-200' />
					</Link>
				) : (
					<Link
						href='/login'
						className=' hover:text-primary transition-colors duration-200'
					>
						Iniciar sesión
					</Link>
				)}
			</div>
		</nav>
	)
}

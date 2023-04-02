import React, { useEffect } from 'react'
import Link from 'next/link'
import { useUserStore } from '@/store/user'

import { GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { type } from 'os'

type HeaderProps = {
	bgWhiteColor?: boolean
}

export function Header({ bgWhiteColor }: HeaderProps) {
	const { profile } = useUserStore()

	return (
		<nav
			className={`flex justify-between px-7 py-5 ${bgWhiteColor ? 'bg-white' : ''}`}
		>
			<Link href='/' className='w-36'>
				<img src='./img/logo-beta.png' alt='Logo Larri' className='w-full' />
			</Link>
			<div className='flex items-center gap-x-2'>
				{/* <div className='flex items-center gap-x-1 group'>
					<span className='font-bold group-hover:text-primary transition-colors duration-200'>
						ES
					</span>
					<GlobeAltIcon className='h-6 w-6 group-hover:text-primary transition-colors duration-200' />
				</div> */}

				{profile ? (
					<Link href='/perfil' passHref>
						<UserCircleIcon className='h-7 w-7 text-gray-400 hover:text-primary transition-colors duration-200' />
					</Link>
				) : (
					<Link
						href='/login'
						className='font-medium text-gray-400 hover:text-primary transition-colors duration-200'
					>
						Iniciar sesión
					</Link>
				)}
			</div>
		</nav>
	)
}

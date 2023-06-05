import {
	UserCircleIcon,
	HomeIcon,
	BookOpenIcon,
	BoltIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export function Options() {
	return (
		<div className='flex justify-between items-center bg-white px-10 py-6 sticky bottom-0 w-full md:hidden'>
			<Link href='/' passHref aria-label='Pagina inicial de larri AI'>
				<HomeIcon className='w-8 h-8 text-newDark active:text-primary' />
			</Link>
			<a
				href='https://docs.larri-ai.com/'
				target='_blank'
				aria-label='Pagina de chat de larri AI'
			>
				<BookOpenIcon className='w-8 h-8 text-newDark active:text-primary' />
			</a>
			<Link href='/prices' passHref aria-label='Pagina de chat de larri AI'>
				<BoltIcon className='w-8 h-8 text-newDark active:text-primary' />
			</Link>
			<Link
				href='/perfil'
				passHref
				aria-label='Pagina de perfil de usuarios larri AI'
			>
				<UserCircleIcon className='w-8 h-8 text-newDark active:text-primary' />
			</Link>
		</div>
	)
}

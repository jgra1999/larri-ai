import {
	UserCircleIcon,
	HomeIcon,
	PencilSquareIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export function Options() {
	return (
		<div className='flex justify-between items-center bg-white px-10 py-5 sticky bottom-0 w-full md:hidden'>
			<Link href='/' passHref aria-label='Pagina inicial de larri AI'>
				<HomeIcon className='w-7 h-7 text-newDark hover:text-primary' />
			</Link>
			<Link href='/chat' passHref aria-label='Pagina de chat de larri AI'>
				<PencilSquareIcon className='w-7 h-7 text-newDark lg:hover:text-primary active:text-primary' />
			</Link>
			<Link
				href='/perfil'
				passHref
				aria-label='Pagina de perfil de usuarios larri AI'
			>
				<UserCircleIcon className='w-7 h-7 text-newDark hover:text-primary' />
			</Link>
		</div>
	)
}

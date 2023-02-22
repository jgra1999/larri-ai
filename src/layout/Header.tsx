import React from 'react'
import Link from 'next/link'

import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function Header() {
	return (
		<nav className='flex justify-between px-7 py-5 bg-white'>
			<Link href='/' className='w-28'>
				<img src='./img/logo.png' alt='Logo Larri' className='w-full' />
			</Link>
			<div className='flex items-center gap-x-1 group'>
				<span className='font-bold group-hover:text-primary transition-colors duration-200'>
					ES
				</span>
				<GlobeAltIcon className='h-6 w-6 group-hover:text-primary transition-colors duration-200' />
			</div>
		</nav>
	)
}

import {
	BookOpenIcon,
	HomeIcon,
	PencilSquareIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export function Options() {
	return (
		<div className='flex justify-between items-center bg-white px-10 py-5 sticky bottom-0 w-full md:hidden'>
			<HomeIcon className='w-7 h-7 text-newDark hover:text-primary' />
			<Link href='/chat'>
				<PencilSquareIcon className='w-7 h-7 text-newDark lg:hover:text-primary active:text-primary' />
			</Link>
			<BookOpenIcon className='w-7 h-7 text-newDark hover:text-primary' />
		</div>
	)
}

import React from 'react'

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { InstaIcon, TwitterIcon } from '@/components/Icons'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className='grid grid-cols-1 justify-center bg-primary pt-20 pb-5 text-white gap-y-20'>
			<div className='flex flex-col justify-center items-center gap-y-10'>
				<Link
					href='/chat'
					className='py-3 px-8 rounded-lg text-lg bg-gray-100 font-bold text-primary hover:bg-white transition-colors duration-200'
				>
					Empezar Ahora
				</Link>
				<div className='flex justify-center items-center gap-x-5'>
					<EnvelopeIcon className='w-8 h-8 text-white' strokeWidth={2.5} />
					<InstaIcon />
					<TwitterIcon />
				</div>
			</div>

			<div className='flex flex-col sm:flex-row sm:justify-around items-center text-center'>
				<img src='./img/logo-white-beta.png' alt='Larri logo' className='w-24' />
				<p className='mt-1 text-sm '>
					Copyright © 2022 Larri, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

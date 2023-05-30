import React from 'react'

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { InstaIcon, TwitterIcon } from '@/components/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from 'public/lang/en'
import es from 'public/lang/es'

export function Footer() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es

	return (
		<footer className='bg-zinc-900 pt-20 pb-5 text-white px-5 w-full'>
			<div className='grid grid-cols-1 md:grid-cols-3 md:justify-items-center gap-y-10'>
				<div className='flex flex-col gap-y-3'>
					<img
						src='./img/logo-full-white.png'
						alt='Larri logo'
						width='128'
						height='33.59'
						className='w-32'
						loading='lazy'
					/>
					<p className='font-medium text-lg text-zinc-400'>
						Copyright © 2023 Larri, Inc. All rights reserved.
					</p>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h4 className='font-bold text-3xl'>{t.h4Footer1}</h4>
					<div className='flex md:justify-center items-center gap-x-5'>
						<a href='mailto:soporte@larri-ai.com' target='_blank'>
							<EnvelopeIcon className='w-8 h-8 text-zinc-400' strokeWidth={2.5} />
						</a>
						<a
							href='https://instagram.com/iventium?igshid=YjNmNGQ3MDY='
							target='_blank'
						>
							<InstaIcon />
						</a>
						<TwitterIcon />
					</div>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h4 className='font-bold text-3xl'>Legal</h4>
					<div className='flex flex-col gap-y-2 font-medium text-lg text-zinc-400'>
						<a
							href='/terminos-y-condiciones'
							target='_blank'
							className='active:text-primary hover:text-primary'
						>
							{t.linkFooterTC}
						</a>

						<a
							href='/politica-de-privacidad'
							target='_blank'
							className='active:text-primary hover:text-primary'
						>
							{t.linkFooterPrivacy}
						</a>
					</div>
				</div>
			</div>

			<div className='font-medium w-full text-center mt-10 text-sm'>
				⚡Powered by{' '}
				<a
					href='https://iventium.com/'
					target='_blank'
					className='hover:text-purple-500 transition-colors duration-300'
					aria-label='Pagina web de Iventium'
				>
					Iventium
				</a>
			</div>
		</footer>
	)
}

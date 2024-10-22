import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { CookieIcon } from './Icons'

import en from 'public/lang/en'
import es from 'public/lang/en'

export function CookiesBanner() {
	const cookiesBanner = useRef<HTMLDivElement>(null)
	const cookiesBackground = useRef<HTMLDivElement>(null)
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es

	useEffect(() => {
		if (!localStorage.getItem('cookies-accepted')) {
			if (cookiesBackground.current && cookiesBanner.current) {
				cookiesBackground.current.classList.add('block')
				cookiesBanner.current.classList.add('flex')
				cookiesBackground.current.classList.remove('hidden')
				cookiesBanner.current.classList.remove('hidden')
			}
		}
	}, [])

	const handleCookiesBanner = () => {
		if (cookiesBanner.current) {
			cookiesBanner.current.classList.remove('flex')
			cookiesBanner.current.classList.add('hidden')
		}
		if (cookiesBackground.current) {
			cookiesBackground.current.classList.add('hidden')
		}

		localStorage.setItem('cookies-accepted', 'true')
	}

	return (
		<>
			<div
				ref={cookiesBanner}
				className='bg-white p-5 max-w-[300px] rounded-md fixed bottom-5 left-5 pt-16 z-50 shadow-md text-center hidden flex-col gap-y-4'
			>
				<CookieIcon />
				<h3 className='font-bold text-lg'>Cookies</h3>
				<p className='text-gray-400 font-medium'>{t.cookieBannerText}</p>
				<button
					onClick={handleCookiesBanner}
					className='w-full bg-gray-600 text-white hover:bg-primary py-3 text-center transition-colors duration-200 rounded-md'
				>
					{t.cookieBannerButton}
				</button>
				<a
					href='/cookies-info'
					target='_blank'
					className='text-gray-400 hover:text-primary font-medium text-sm'
				>
					{t.cookieBannerLink}
				</a>
			</div>

			<div
				ref={cookiesBackground}
				className='bg-black opacity-30 w-screen h-screen fixed top-0 left-0 z-40 hidden'
			></div>
		</>
	)
}

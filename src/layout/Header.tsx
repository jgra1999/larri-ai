import { useEffect, useState, MouseEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/user'
import { useAnimate, stagger, motion } from 'framer-motion'

import { UserCircleIcon, LanguageIcon } from '@heroicons/react/24/solid'
import en from '../../public/lang/en'
import es from '../../public/lang/es'

type HeaderProps = {
	bgWhiteColor?: boolean
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		animate(
			'.submenu',
			{
				clipPath: isOpen
					? 'inset(0% 0% 0% 0% round 10px)'
					: 'inset(10% 50% 90% 50% round 10px)'
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5
			}
		)

		// animate(
		// 	'.submenu__item',
		// 	isOpen
		// 		? { opacity: 1, scale: 1, filter: 'blur(0px)' }
		// 		: { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
		// 	{
		// 		duration: 0.2,
		// 		delay: isOpen ? staggerMenuItems : 0
		// 	}
		// )
	}, [isOpen])

	return scope
}

export function Header({ bgWhiteColor }: HeaderProps) {
	const { profile } = useUserStore()
	const [isOpen, setIsOpen] = useState(false)
	const scope = useMenuAnimation(isOpen)
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es

	const handleLocaleLanguage = (e: MouseEvent, locale: string) => {
		e.preventDefault()
		router.push(router.pathname, router.asPath, { locale })
	}

	return (
		<nav
			ref={scope}
			className={`flex justify-between px-2 sm:px-7 py-3 bg-white ${
				bgWhiteColor ? 'bg-white' : ''
			}`}
		>
			<Link href='/'>
				<img
					src='https://res.cloudinary.com/hothra/image/upload/v1685574183/logo_rip0fl.png'
					alt='Logo Larri'
					width='144'
					height='81'
					className='w-36'
				/>
			</Link>
			<ul className='flex items-center gap-x-3 text-xs sm:gap-x-8 sm:text-lg font-medium text-gray-500'>
				<li>
					<Link
						href='/prices'
						className='hover:text-primary transition-colors duration-200 hidden md:block'
					>
						{t.linkNav1}
					</Link>
				</li>
				<li>
					<a
						href='https://docs.larri-ai.com/'
						target='_blank'
						className='hover:text-primary transition-colors duration-200 hidden md:block'
					>
						{t.linkNav2}
					</a>
				</li>

				<li>
					{profile?.user_id ? (
						<Link href='/perfil' passHref>
							<UserCircleIcon className='h-7 w-7 text-gray-400 hover:text-primary transition-colors duration-200 hidden md:block' />
						</Link>
					) : (
						<Link
							href='/login'
							className=' hover:text-primary transition-colors duration-200 hidden md:block'
						>
							{t.linkNav3}
						</Link>
					)}
				</li>
				<li>
					<motion.button
						whileTap={{ scale: 0.97 }}
						onClick={() => setIsOpen(!isOpen)}
					>
						<LanguageIcon className='h-6 md:h-5 w-6 md:w-5 md:hover:text-primary active:text-primary transition-colors duration-200' />
					</motion.button>
					<ul
						style={{
							pointerEvents: isOpen ? 'auto' : 'none',
							clipPath: 'inset(10% 50% 90% 50% round 10px)'
						}}
						className='submenu absolute bg-white right-2'
					>
						<li className='submenu__item'>
							<a href='#' onClick={(e) => handleLocaleLanguage(e, 'es')}>
								{t.linkLanguage1}
							</a>
						</li>
						<li className='submenu__item'>
							<a href='#' onClick={(e) => handleLocaleLanguage(e, 'en')}>
								{t.linkLanguage2}
							</a>
						</li>
					</ul>{' '}
				</li>
			</ul>
		</nav>
	)
}

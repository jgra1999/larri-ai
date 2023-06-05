import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/layout/Layout'
import en from 'public/lang/en'
import es from 'public/lang/es'

export default function CookiesPage() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div className='flex justify-between items-center relative bg-white'>
				<div className=' absolute left-5 top-3'>
					<img
						src='https://res.cloudinary.com/hothra/image/upload/v1685574183/logo_rip0fl.png'
						alt='Logo Larri'
						className='w-32'
					/>
				</div>
				<div className='h-full px-14 pb-10 flex items-center mt-28'>
					<div>
						<h1 className='text-5xl font-bold text-newDark'>
							{t.cookiesTitlePt1}{' '}
							<span className='text-primary'>{t.cookiesTitlePt2}</span>
						</h1>
						<div className='mt-8 font-medium text-gray-500 text-sm space-y-5 text-justify'>
							<h3 className='text-newDark text-lg'>{t.cookiesSubtitle1}</h3>
							<p>{t.cookiesDescription1}</p>

							<p>{t.cookiesListItem1}</p>

							<p>{t.cookiesListItem2}</p>

							<p>{t.cookiesListItem3}</p>

							<p>{t.cookiesListItem4}</p>

							<p>{t.cookiesListItem5}</p>

							<h3 className='text-newDark text-lg'>{t.cookiesSubtitle2}</h3>
							<p>{t.cookiesDescription2}</p>

							<p>
								<a
									href='https://support.google.com/chrome/answer/95647?hl=es'
									target='_blank'
									rel='noopener'
									className='text-primary'
								>
									{t.cookiesConfig} en Google Chrome
								</a>
							</p>

							<p>
								<a
									href='http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9'
									target='_blank'
									rel='noopener'
									className='text-primary'
								>
									{t.cookiesConfig} Microsoft Internet Explorer
								</a>
							</p>

							<p>
								<a
									href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&amp;redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we'
									target='_blank'
									rel='noopener'
									className='text-primary'
								>
									{t.cookiesConfig} Mozilla Firefox
								</a>
							</p>

							<p>
								<a
									href='https://support.apple.com/es-es/HT201265'
									target='_blank'
									rel='noopener'
									className='text-primary'
								>
									{t.cookiesConfig} Safari (Apple)
								</a>
							</p>

							<h3 className='text-newDark text-lg'>{t.cookiesSubtitle3}</h3>

							<p>{t.cookiesDescription3}</p>
							<p>{t.cookiesDescription4}</p>

							<h3 className='text-newDark text-lg'>{t.cookiesSubtitle4}</h3>

							<p>{t.cookiesDescription5}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

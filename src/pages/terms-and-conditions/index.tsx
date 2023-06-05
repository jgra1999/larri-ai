import { useRouter } from 'next/router'
import { Layout } from '@/layout/Layout'
import en from '../../../public/lang/en'
import es from '../../../public/lang/es'

export default function TermsAndConditionsPage() {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'en' ? en : es
	return (
		<Layout showHeader={false} googleIndex={false}>
			<div className='flex justify-between items-center relative bg-white h-screen'>
				<div className='w-1/2 h-screen px-14 flex items-center'>
					<div>
						<h1 className='text-5xl font-bold text-newDark'>
							{t.TitleTermsPagePt1}
							<span className='text-primary'>{t.TitleTermsPagePt2}</span>
						</h1>
						<div className='mt-8 font-medium text-gray-500 text-sm space-y-5 text-justify'>
							<p>{t.ParagraphTermsPage1}</p>
							<p>{t.ParagraphTermsPage2}</p>
							<p>{t.ParagraphTermsPage3}</p>
							<p>{t.ParagraphTermsPage4}</p>
							<p>{t.ParagraphTermsPage5}</p>
						</div>
					</div>
				</div>
				<div className='w-1/2 h-screen hidden lg:block'>
					<img
						src='https://res.cloudinary.com/hothra/image/upload/v1684518797/Larri-AI/feature4-scsa.jpg'
						alt='feature 4 image'
						className='w-full h-full'
						loading='lazy'
					/>
				</div>
			</div>
		</Layout>
	)
}

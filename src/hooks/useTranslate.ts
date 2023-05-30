import { useRouter } from 'next/router'

import en from '../../public/lang/en'
import es from '../../public/lang/es'

const router = useRouter()
const { locale } = router
export const t = locale === 'en' ? en : es

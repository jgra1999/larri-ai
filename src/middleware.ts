import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
	// const res = NextResponse.next()
	// return NextResponse.redirect(new URL('/', req.url))
	// res.redirect

	// if (req.nextUrl.pathname.includes('/perfil')) {
	// 	if (token === undefined) {
	// 		return NextResponse.redirect(new URL('/login', req.url))
	// 	}
	// }

	// if (req.nextUrl.pathname.includes('/login')) {
	// 	if (token) {
	// 		return NextResponse.redirect(new URL('/perfil', req.url))
	// 	}
	// }

	// if (req.nextUrl.pathname.includes('/chat')) {
	// 	if (token === undefined) {
	// 		return NextResponse.redirect(new URL('/login', req.url))
	// 	}
	// }

	return NextResponse.next()
}

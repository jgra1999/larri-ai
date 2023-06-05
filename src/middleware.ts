import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
	const token = req.cookies.get('supabase-auth-token')

	if (req.nextUrl.pathname.includes('/login')) {
		if (token) {
			return NextResponse.redirect(new URL('/', req.url))
		}
	}

	return NextResponse.next()
}

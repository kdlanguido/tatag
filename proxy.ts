import { NextRequest, NextResponse } from 'next/server'
import { auth } from './lib/auth'

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/sign-up', '/']

export default async function proxy(req: NextRequest) {

    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const session = await auth.api.getSession({ headers: req.headers })

    if (isProtectedRoute && !session?.user.email) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (
        isPublicRoute &&
        session?.user.email &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
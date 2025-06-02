import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['vi', 'en']
const defaultLocale = 'vi'

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  // 1. Check URL path first
  const pathname = request.nextUrl.pathname
  const pathLocale = pathname.split('/')[1]
  if (pathLocale && locales.includes(pathLocale)) {
    return pathLocale
  }

  // 2. Check cookie
  const cookieLocale = request.cookies.get('language')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 3. Check accept-language header
  // const acceptLanguage = request.headers.get('accept-language')
  // if (acceptLanguage) {
  //   const preferredLocale = acceptLanguage.split(',')[0].split('-')[0]
  //   if (locales.includes(preferredLocale)) {
  //     return preferredLocale
  //   }
  // }
  // force to default Locale without check header

  return defaultLocale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  const locale = getLocale(request)

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {    
    
    // Create response with redirect
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
    
    // Set the locale cookie
    response.cookies.set('language', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax'
    })
    
    return response
  }

  res.cookies.set('language', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax'
  })

  return res
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), Payload admin, API routes, and static files
    '/((?!_next|api|.*\\..*).*)',
  ],
} 
import { NextResponse } from 'next/server'

export function middleware(req) {
  // Get the token from cookies directly from the request
  const token = req.cookies.get('token')

  // Log the token for debugging purposes
  console.log('Token from middleware:', token)

  // Check if the token is not present
  if (!token) {
    console.log('No token found, redirecting to login.')
    // Redirect to the login page if the token is not found
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If token is found, allow the request to proceed
  console.log('Token found, proceeding to requested page.')
  return NextResponse.next()
}

// Define the routes for which this middleware should be applied
export const config = {
  matcher: ['/admin/:path*'], // Apply to all routes under /admin
}

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';
//   const region = country === 'IN' ? 'IN' : 'US';
  
//   const response = NextResponse.next();

//   response.cookies.set('userRegion', region, {
//     path: '/',
//     maxAge: 2592000,
//     sameSite: 'lax',
//   });

//   return response;
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
//   ],
// };






import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || 'UK';
  const region = country === 'IN' ? 'IN' : 'US';
  
  const response = NextResponse.next();

  response.cookies.set('userRegion', region, {
    path: '/',
    maxAge: 2592000,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
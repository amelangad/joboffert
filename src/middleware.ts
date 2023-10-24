export { default } from 'next-auth/middleware';
import type { NextRequest} from 'next/server'
import {NextResponse } from 'next/server'

export const config = {
    matcher: ["/UserOffert/:path*"]
};


/*export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/'
  return NextResponse.rewrite(url)
}*/
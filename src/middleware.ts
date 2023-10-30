export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/offerts/:path*", "/new"]
};
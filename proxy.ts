import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // High-compatibility CSP for Firebase, Vercel, and Google Analytics
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com https://www.gstatic.com https://*.firebasejs.com https://*.googleapis.com https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com;
    script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://*.firebasejs.com https://*.googleapis.com https://apis.google.com https://www.gstatic.com https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com;
    connect-src 'self' ws://localhost:3000 wss://localhost:3000 https://*.firebaseio.com https://*.googleapis.com https://*.firebase.com https://*.vitals.vercel-analytics.com https://www.google-analytics.com https://stats.g.doubleclick.net;
    frame-src 'self' https://*.firebaseapp.com https://*.firebase.com;
    img-src 'self' blob: data: https://*.googleapis.com https://*.firebase.com https://www.google-analytics.com https://*.google.com https://*.google.co.in https://stats.g.doubleclick.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (api routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};

/**
 * @file middleware.ts
 * Middleware module for handling authentication and localization routing.
 * This module exports a default function that acts as a middleware for Next.js.
 * It is responsible for redirecting or rewriting URLs based on the authentication status and locale.
 * The module also exports a configuration object for specifying the URL matcher.
 * The middleware is great as it intercepts all requests before they reach the page.
 *
 * @module middleware
 * @donotmove
 */

import { NextResponse } from "next/server";
import { NextAuthRequest, getAuthorisationCode } from "./auth/routes";
import { auth } from "./auth/auth";
import { getLocaleRoutesProps } from "./locales/routing";
import { NextAuthConfig } from "next-auth";
import { NextConfig } from "next";

/**
 * A redirection will change the URL of the page and render the page at the new URL.
 */
const redirect = (url: string, req: NextAuthRequest): NextResponse => NextResponse.redirect(new URL(url, req.nextUrl.href));

/**
 * A rewrite will render the page of the specified url, but will not change the window URL.
 */
const rewrite = (url: string, req: NextAuthRequest): NextResponse => NextResponse.rewrite(new URL(url, req.nextUrl.href));

export default auth(async (req: NextAuthRequest) => {
    const { hasLocale, locale, localelessPath } = getLocaleRoutesProps(req);
    const code = getAuthorisationCode(req, localelessPath);
    if (code != 200) return rewrite(`/${locale}/error/${code}`, req);
    if (!hasLocale) return redirect(`/${locale}${localelessPath}${req.nextUrl.search}`, req);
});

/**
 * @property {string[]} matcher - An array of URL patterns to match against. The middleware will solely be applied to URLs that match this patterns.
 */
export const config = {
    matcher: ["/((?!api|_next/static|public|_next/image|favicon.ico|__nextjs_).*)"]
};

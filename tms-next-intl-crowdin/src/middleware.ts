import createMiddleware from 'next-intl/middleware';
import {locales} from "@/i18n";

export default createMiddleware({
    locales,
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|ach)/:path*']
};
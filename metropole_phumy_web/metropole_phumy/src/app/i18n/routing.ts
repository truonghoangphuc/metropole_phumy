import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['vi', 'en'],
  localeDetection: false,
  // Used when no locale matches
  defaultLocale: 'vi',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en': '/en',
      'vi': '/vi'
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
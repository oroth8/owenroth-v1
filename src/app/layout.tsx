import { type Metadata } from 'next'

import { Suspense } from 'react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    template: '%s - Owen Roth',
    default:
      'Owen Roth -  Software Developer, Fitness Enthusiast, and Navy Veteran.',
  },
  metadataBase: new URL('https://owen-roth.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  description:
    "Owen Roth's personal portfolio containing bio, resume, projects, photos, articles, and products/technology he uses.",
  openGraph: {
    images: ['/static/meta-tag-owen-roth.jpg'],
    locale: 'en_US',
    type: 'website',
    siteName: 'owen-roth.com',
    title: {
      template: '%s - Owen Roth',
      default:
        'Owen Roth -  Software Developer, Fitness Enthusiast, and Navy Veteran.',
    },
  },
  keywords: [
    'owen',
    'roth',
    'owenroth',
    'developer',
    'software developer',
    'software engineer',
    'portfolio',
    'chicago developer',
    'website developer',
    'application developer',
    'SEO consultant',
    'CRM consultant',
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: `${process.env.GOOGLE_SITE_VERIFICATION}`,
  },
  icons: {
    icon: '@/images/portrait.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Suspense>
          <Analytics />
        </Suspense>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

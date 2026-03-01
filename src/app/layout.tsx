import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rishitsingh.dev'),
  title: {
    default: 'Rishit Singh - Portfolio',
    template: '%s | Rishit Singh',
  },
  description:
    'CS sophomore at the University of Cincinnati building things that feel like they actually matter — at the intersection of hardware, software, and human-centered design.',
  keywords: [
    'portfolio',
    'CS student',
    'user experience design',
    'frontend engineer',
    'UX designer',
    'embedded systems',
    'accessibility',
    'UC',
    'University of Cincinnati',
    'hackathon',
  ],
  authors: [{ name: 'Rishit Singh', url: 'https://rishitsingh.dev' }],
  creator: 'Rishit Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rishitsingh.dev',
    title: 'Rishit Singh - Portfolio',
    description:
      'CS sophomore at the University of Cincinnati building things that feel like they actually matter — at the intersection of hardware, software, and human-centered design.',
    siteName: 'Rishit Singh Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rishit Singh — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

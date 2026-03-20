import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CustomCursor from '@/components/interactive/custom-cursor'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Sai Graphics | Professional Printing & Branding Services Since 2009',
  description: 'Sai Graphics - Your perfect print partner for flex printing, vinyl printing, glow sign boards, hoardings, banners, business cards, and complete branding solutions in Bhayander East, Thane.',
  keywords: 'printing services, branding, flex printing, vinyl printing, glow sign boards, hoardings, banners, business cards, Bhayander, Thane',
  authors: [{ name: 'Sai Graphics' }],
  openGraph: {
    title: 'Sai Graphics | Professional Printing & Branding',
    description: 'Designing | Printing | Branding – Your Perfect Print Partner Since 2009',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased overflow-x-hidden`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

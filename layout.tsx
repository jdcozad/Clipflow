
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy First Utility Tools',
  description: 'Free privacy-first browser productivity tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

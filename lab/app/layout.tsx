import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ML Laboratory Reference',
  description: 'Machine Learning Laboratory Experiments — Reference Notebook',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

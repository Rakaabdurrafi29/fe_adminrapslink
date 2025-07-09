import './globals.css'


/* Tambahan CSS global Anda di sini jika ada */

export const metadata = {
  title: 'Linktree Rakha',
  description: 'Daftar link sosial media Rakha',
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

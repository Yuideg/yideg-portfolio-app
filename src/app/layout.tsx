import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/vendor/nucleo/css/nucleo.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/argon-design-system-react.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";


library.add(fas)
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yideg Portfolio App',
  description: 'yideg misganaw portfolio app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

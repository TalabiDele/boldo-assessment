import './globals.css'
import { Manrope } from 'next/font/google'

export const metadata = {
	title: 'Boldo | Edgar Allen',
	description: '',
}

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} antialiased`}>{children}</body>
		</html>
	)
}

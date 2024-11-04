import Navbar from '@/components/Navbar/Index'
import './globals.css'
import { Manrope } from 'next/font/google'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Boldo | Edgar Allen',
	description: '',
}

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

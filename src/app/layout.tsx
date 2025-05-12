import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constants'

const zen = Noto_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: 'normal'
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Todo list for personal use'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${zen.variable} antialiased`}>{children}</body>
		</html>
	)
}

import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { PT_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin']
})

const ptSans = PT_Sans({
	variable: '--font-pt-sans',
	subsets: ['latin'],
	weight: ['400', '700']
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
			<body
				className={`${nunito.variable} ${ptSans.variable} antialiased relative bg-lightwood min-h-screen`}
			>
				<div className='texture' />
				<Providers>
					{children}
					<Toaster
						theme='dark'
						position='bottom-right'
						toastOptions={{ duration: 2000 }}
					/>
				</Providers>
			</body>
		</html>
	)
}

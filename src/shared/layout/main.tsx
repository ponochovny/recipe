import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import Link from 'next/link'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Recipes',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-300`}
			>
				<div className='text-center'>
					<Link href='/' className='hover:opacity-80'>
						<h1 className='text-6xl font-bold text-center inline-flex flex-col uppercase py-10'>
							<span className='font-light text-4xl'>Best</span>
							Recipes
							<span className='font-light text-4xl'>Ever</span>
						</h1>
					</Link>
				</div>
				{children}
			</body>
		</html>
	)
}

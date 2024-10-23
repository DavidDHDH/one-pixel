import type { Metadata } from "next"
import localFont from "next/font/local"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "One Pixel - Web Dev Studio by David Heimfert",
	description:
		"Building websites and web applications with Next.js and Tailwind CSS",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="fr"
			className=" scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}

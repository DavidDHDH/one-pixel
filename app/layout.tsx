import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
			className="scroll-smooth">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}

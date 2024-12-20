import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "One Pixel - Web & Dev Studio à Saint-Barthélemy",
	description:
		"Studio de développement web à Saint-Barthélemy, spécialisé dans la création de web applications/logiciels sur mesure pour les entreprises et entrepreneurs.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

	return (
		<html
			lang="fr"
			className="scroll-smooth">
			<body className={`${inter.className} antialiased`}>
				{children}
				{gaId && <GoogleAnalytics gaId={gaId} />}
			</body>
		</html>
	)
}

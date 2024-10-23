import Link from "next/link"
import React from "react"

const Button = ({ label, href }: { label: string; href: string }) => {
	return (
		<Link href={href}>
			<div className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
				{label}
			</div>
		</Link>
	)
}

export default Button
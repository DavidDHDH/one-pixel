import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)',
    			primaryText: '#BFA78D',
    			sand: {
    				'100': '#FDFBF6',
    				'200': '#FBF7EE',
    				'300': '#F5EEE2',
    				'400': '#EBE2D4',
    				'500': '#DFD2C2',
    				'600': '#BFA78D',
    				'700': '#A07E61',
    				'800': '#81593D',
    				'900': '#6B3F25'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			'shiny-text': {
    				'0%, 90%, 100%': {
    					'background-position': 'calc(-100% - var(--shiny-width)) 0'
    				},
    				'30%, 60%': {
    					'background-position': 'calc(100% + var(--shiny-width)) 0'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			'shiny-text': 'shiny-text 8s infinite'
    		}
    	}
    },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
}
export default config

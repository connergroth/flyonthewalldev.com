import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				fly: {
					DEFAULT: '#222222',
					muted: '#333333',
					ivory: '#FFFFF0',
					accent: '#FF6B35'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Manrope', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fly-orbit': {
					'0%': { 
						transform: 'translateX(0) translateY(0) rotate(0deg)'
					},
					'25%': { 
						transform: 'translateX(20px) translateY(-15px) rotate(90deg)'
					},
					'50%': { 
						transform: 'translateX(0) translateY(-30px) rotate(180deg)'
					},
					'75%': { 
						transform: 'translateX(-20px) translateY(-15px) rotate(270deg)'
					},
					'100%': { 
						transform: 'translateX(0) translateY(0) rotate(360deg)'
					}
				},
				'fly-buzz': {
					'0%': { 
						transform: 'translate(0, 0) rotate(0deg)'
					},
					'10%': { 
						transform: 'translate(30px, -20px) rotate(10deg)'
					},
					'20%': { 
						transform: 'translate(60px, 20px) rotate(20deg)'
					},
					'30%': { 
						transform: 'translate(40px, 40px) rotate(0deg)'
					},
					'40%': { 
						transform: 'translate(0, 30px) rotate(-20deg)'
					},
					'50%': { 
						transform: 'translate(-30px, 0) rotate(-10deg)'
					},
					'60%': { 
						transform: 'translate(-40px, -30px) rotate(0deg)'
					},
					'70%': { 
						transform: 'translate(-20px, -50px) rotate(10deg)'
					},
					'80%': { 
						transform: 'translate(20px, -30px) rotate(20deg)'
					},
					'90%': { 
						transform: 'translate(30px, -10px) rotate(10deg)'
					},
					'100%': { 
						transform: 'translate(0, 0) rotate(0deg)'
					}
				},
				'fly-land': {
					'0%': { 
						transform: 'translate(0, 0) scale(1)',
						opacity: 1
					},
					'10%': { 
						transform: 'translate(0, -10px) scale(1)',
						opacity: 1
					},
					'90%': { 
						transform: 'translate(0, 0) scale(1)',
						opacity: 1
					},
					'95%': { 
						transform: 'translate(0, 0) scale(0.9)',
						opacity: 0.9
					},
					'100%': { 
						transform: 'translate(0, 0) scale(0.8)',
						opacity: 0.8
					}
				},
				'fly-takeoff': {
					'0%': { 
						transform: 'translate(0, 0) scale(0.8)',
						opacity: 0.8
					},
					'20%': { 
						transform: 'translate(0, 0) scale(0.9)',
						opacity: 0.9
					},
					'40%': { 
						transform: 'translate(0, -5px) scale(1)',
						opacity: 1
					},
					'100%': { 
						transform: 'translate(0, -15px) scale(1)',
						opacity: 1
					}
				},
				'float': {
					'0%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-20px)'
					},
					'100%': { 
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fly-orbit': 'fly-orbit 12s infinite ease-in-out',
				'fly-buzz': 'fly-buzz 20s infinite ease-in-out',
				'fly-land': 'fly-land 1s ease-in-out forwards',
				'fly-takeoff': 'fly-takeoff 1s ease-in-out forwards',
				'float': 'float 6s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
				}
			},
			animationDelay: {
				0: '0s',
			    200: '0.2s',
    			400: '0.4s',
  			},
				fontFamily: {
					display: ['"Great Vibes"', 'cursive'],
					sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
					amiri: ['"Amiri"', 'serif']
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
					pulseScale: {
  						"0%, 100%": { transform: "scale(1)" },   // Normal size
  						"50%": { transform: "scale(1.16)" },     // Slightly bigger in middle
					},

					'accordion-up': {
						from: {
							height: 'var(--radix-accordion-content-height)'
						},
						to: {
							height: '0'
						}
					},
					'fade-in': {
						'0%': {
							opacity: '0',
							transform: 'translateY(10px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateY(0)'
						}
					}
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
					'fade-in': 'fade-in 0.3s ease-out',
      		  		'pulse-scale': 'pulseScale 3s ease-in-out infinite'
				}
		}
	},
plugins: [
  tailwindcssAnimate,
  function ({ addUtilities }) {
    addUtilities({
      '.delay-0': { animationDelay: '0s' },
      '.delay-200': { animationDelay: '0.4s' },
      '.delay-400': { animationDelay: '0.9s' },
    });
  },
],

	
} satisfies Config;

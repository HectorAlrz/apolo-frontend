import { COLORS } from '@/constants/color.constants'
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
      colors: COLORS,
      spacing: {
        0.5: '0.12rem',
        layout: '1.4rem',
        'big-layout': '2.3rem',
        fontSize: {
          xs: '0.9rem',
          sm: '1.07rem',
          base: '1.18rem',
          lg: '1.24rem',
          xl: '1.38rem',
          '2xl': '1.8rem',
          '3xl': '2.22rem',
          '4xl': '2.66rem',
          '5xl': '5.56rem',
          '6xl': '4.44rem',
          '7xl': '5.33rem',
          '8xl': '7.1rem',
          '9xl': '9.5rem',
        },
        transitionDuration: {
          DEFAULT: '266ms'
        }
      },
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          homeButton:  'linear-gradient(112.83deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 110.84%)',
			}
		}
	},
	plugins: []
}

export default config


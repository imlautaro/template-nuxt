import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
	},
	plugins: [typography],
})

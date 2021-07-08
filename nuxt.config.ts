import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			Inter: [400, 600, 700],
		},
	},
	head: {
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0',
			},
		],
	},
	srcDir: 'src',
}

export default config

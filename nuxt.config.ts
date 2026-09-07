export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: {enabled: true},

	app: {
		baseURL: '/',
	},

	runtimeConfig: {
		public: {
			gsApiKey: process.env.GS_API_KEY,
			gsSpreadsheetId: process.env.GS_ST_CMS_ID,
		},
	},

	vite: {
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/scss/vars/_fonts.scss" as *;' +
						'@use "@/assets/scss/vars/_variables.scss" as *;' +
						'@use "@/assets/scss/vars/_mixins.scss" as *;',
				},
			},
		},
	},

	css: [
		'@/assets/css/normalize.css',
		'@/assets/scss/main.scss',
	],
})

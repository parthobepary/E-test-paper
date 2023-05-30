// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'E-test paper',
            meta: [
                // <meta name="description" content="My amazing site">
                {name: 'description', content: 'e-test paper'}
            ],
        }
    },
    imports: {
        dirs: ['stores'],
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        'nuxt-headlessui',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL
        }
    }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss',
    ],
    app:{
        head:{
            title:'Nuxt Dojo',
            meta:[
                {name:'descritopn',content:'Everything about nuxt 3'}
            ],
            link:[
                {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'}
            ]
        }
    },
    runtimeConfig:{
        apiSecret:process.env.CURRENCY_API_KEY
    }
})

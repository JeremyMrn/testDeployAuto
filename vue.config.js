const { defineConfig } = require('@vue/cli-service')
module.exports = {
    outputDir: './applications/' + process.env.VUE_APP_NAME_APP + '/www/',
    publicPath: './',
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        https: false
    }
}
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const vuetify = new Vuetify({
    rtl: false,
    icons: {
        iconfont: 'fa',
    },
    theme: {
        themes: {
            light: {
                primary: '#02263C',
                secondary: '#CABFA6',
                anchor: '#8c9eff',
                background: '#02263C',
            },
            dark: {
                primary: '#02263C',
                secondary: '#CABFA6',
                anchor: '#8c9eff',
                background: '#02263C',
            },
        },
    },
})

export default vuetify
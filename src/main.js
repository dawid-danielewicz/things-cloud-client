import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from "./router";
import i18n from "./i18n";
import VueSocketIO from "vue-3-socket.io";
import SocketIO from 'socket.io-client'

const SocketIOInstance = new VueSocketIO({
    debug: true,
    connection: SocketIO('http://192.168.0.102:3000')
})


const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(vuetify)
app.use(SocketIOInstance)

app.mount('#app')

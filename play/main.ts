import { createApp } from 'vue'
import '@el-cool/theme-chalk/src/dark/css-vars.scss'
import '@el-cool/theme-chalk/src/notification.scss'
import '@el-cool/theme-chalk/src/message-box.scss'
import '@el-cool/theme-chalk/src/message.scss'
    ; (async () => {
        const apps = import.meta.glob('./src/*.vue')
        const name = location.pathname.replace(/^\//, '') || 'App'
        const file = apps[`./src/${name}.vue`]
        if (!file) {
            location.pathname = 'App'
            return
        }
        const App = (await file()).default
        const app = createApp(App)

        app.mount('#play')
    })()

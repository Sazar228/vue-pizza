import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import components from './components/UI/index'
import router from './router/router'

const app=createApp(App)

components.forEach(component=>{
    app.component(component.name,component)
})


app
    .use(router)
    .use(autoAnimatePlugin)
    .mount('#app')

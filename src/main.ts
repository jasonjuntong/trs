import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Nora from '@primeuix/themes/nora';

import App from './App.vue'
import router from './router'
import { useTheme } from '@primeuix/themes';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Nora
  }
})

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'reflect-metadata';
import App from './App.vue'
import router from './router'
import { container, ContainerSymbol } from '@/container/container'
import { InterceptorHandlers } from '@/services/intercept-handler.service'
const app = createApp(App)

app.use(createPinia())

app.provide(ContainerSymbol, container);
const interceptorHandler: InterceptorHandlers = container.resolve(
  InterceptorHandlers
) as InterceptorHandlers;
interceptorHandler.init();
app.use(router)

app.mount('#app')

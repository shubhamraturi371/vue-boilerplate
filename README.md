# vue-boilerplate

This boilerplate project serves as a foundation for building scalable and maintainable Vue.js applications using the Composition API. It incorporates essential design patterns and best practices, including dependency injection, service templates, and route guards for authorization, enabling developers to focus on building robust features without getting bogged down by boilerplate code.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## copy env file
```sh
cp .env.example .env
```

## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# What's included
## Dependency Injection
This project demonstrates how to integrate Dependency Injection (DI) into a Vue.js project using InversifyJS and TypeScript. The project leverages InversifyJS to manage dependencies and promote a more modular, testable, and maintainable architecture, especially for scalable applications.
#### Create service example
```agda
// src/services/MyService.ts
import { injectable } from 'inversify';

@injectable()
export class MyService {
    logMessage() {
        console.log('This message is coming from MyService');
    }
}
```

#### Inject in component example
`` const myService = inject<MyService>(MyService);``

## Auth Token Interceptor `authorizationTokeninterceptor.ts`
This project includes an AuthTokenInterceptor for handling authentication tokens in Vue.js. The interceptor automatically attaches a token to each HTTP request, ensuring secure and authenticated communication with the backend. The project is built with Vue 3 and Axios for HTTP requests, and supports handling authentication seamlessly across the application.

# Directory Structure
```plaintext
src/
│
├── services/         
│   └── MyService.ts  
│
├── components/        
│   └── MyComponent.vue 
│
├── interceptors           
│   └── authoriztionTokeninterceptor.ts
│   └──axiosErorInterceptor.ts
│
├── guards           
│   └── testGuard.ts
│
├── container           
│   └── container.ts
│      
├── App.vue          
├── main.ts   
└── ...

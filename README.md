# vue35demo

This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
pnpm install
```

```sh
pnpm dev
```

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## icon相关的设置

icon库：

https://icon-sets.iconify.design/

https://icones.js.org/

https://www.iconfont.cn/

<!-- 指定为蒙版 -->
<div class="i-custom-shengdanmao?mask" c-yellow />

<!-- 指定为背景 -->
<div class="i-custom-shengdanlihe?bg" />

## Unocss相关

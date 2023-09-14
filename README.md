# Vue Clean Architecture Template

A Quasar Project template for Vue.js applications using Clean Architecture.

[Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Quasar](https://quasar.dev/) + [TailwindCSS](https://tailwindcss.com/)

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Layers of Clean Architecture

The `app` directory contains the application modules under `core` folder, each with its own folder structure based on clean architecture:

`domain/entities`: Contains the domain entities.

`domain/usecases`: Contains the use cases.

`data/repositories`: Contains the data repositories.

`interfaces/adapters`: Contains the adapter interfaces.

`interfaces/repositories`: Contains the data repository interfaces.

**Note:** The `src/app/core/users` folder is not part of the clean architecture, it is added to the template to make it
easier to toi follow the clean architecture. You can remove it and add your own modules.

## Contributing

Follow the [XID Contributing Guide](https://github.com/XID-Digital-Services/guide-lines/blob/main/contributing.md).

Happy Coding!! 😎🔥🤙🫶🤜🤛

P.S. Eat healthy, eat fruits and vegetables. 🍅🥕🥦🥑🍌

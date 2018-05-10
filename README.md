# vue-boilerplate

**Vue** boilerplate with *TypeScript* for developing small to large, easy to scale, single page applications.

## Usage

To get up and running run:

```
$ npm install
$ npm start
```

## What's included

- [TypeScript][TYPESCRIPT]
- [Webpack][WEBPACK] + [vue-loader][VUE_LOADER]
- [State preserving hot-reload][HOT_RELOAD]
- [vuex][VUEX]
- [vue-router][VUE_ROUTER]

## Important Files

So there are two important files that needs to be addressed:

### :page_facing_up: src/main.ts

This file will load your single page application and bootstrap all the plugins that are used. It will also serve as the entry point which will be loaded and compiled using webpack.

### :page_facing_up: src/App.vue

This is the project root component. Inside this component we will add the router component so **vue-router** can load the resources accordingly.

## Directory Structure

### :open_file_folder: /config

### :open_file_folder: /scripts

Webpack scripts and other utilities scripts will be placed on this folder

### :open_file_folder: /src/components

Components that can be used on multiple places will be saved here. If you want to use the components on multiple projects consider creating a standalone library and don't forget to share it with us!

### :open_file_folder: /src/pages

Router level pages are placed inside this folder for an easy access

### :open_file_folder: /src/plugins

Vue has a large number of libraries and you are definitely going to take advantage of that to improve your application. Some libraries demand a more robust configuration, with that in mind, each library will have its configuration in a separate file placed in this folder

## Scripts

### $ npm run start

Start the development server

### $ npm run build

Create a production package

### $ npm run test

Run all test suites

## Got questions or suggestions?

Feel free to hit me up on:

[GitHub](GITHUB)

Or create an [issue][ISSUES]

[TYPESCRIPT]: https://www.typescriptlang.org/
[VUEX]: https://vuex.vuejs.org/
[VUE_ROUTER]: https://router.vuejs.org
[VUE_LOADER]: https://vue-loader.vuejs.org
[WEBPACK]: https://webpack.js.org/
[HOT_RELOAD]: https://vue-loader.vuejs.org/en/features/hot-reload.html
[GITHUB]: https://github.com/jpauloamartins
[ISSUES]: https://github.com/kadro/vue-boilerplate/issues
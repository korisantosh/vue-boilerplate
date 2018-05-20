import Vue from 'vue';

// PLUGINS
import './plugins/vue-router';

import App from './App';

import { router } from './plugins/vue-router';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
  });
});


interface Module {
  hot: {
    accept: () => void,
  };
}

declare var module: Module;

if (module.hot) {
  module.hot.accept();
}

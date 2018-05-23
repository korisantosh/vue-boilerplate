import Vue from 'vue';

// PLUGINS
import './plugins/vue-router';
import { i18n } from './plugins/vue-i18n';

import App from './App';

import { router } from './plugins/vue-router';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    i18n,
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

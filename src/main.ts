import Vue from 'vue';

// PLUGINS
import './plugins/vue-router';

import App from './App';

import { router } from './plugins/vue-router';

document.addEventListener('DOMContentLoaded', () => {
    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        render: h => h(App),
    });
});

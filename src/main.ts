import Vue from 'vue';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        render: h => h(App),
    });
});

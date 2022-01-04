require('./bootstrap');

// require('alpinejs');
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router/'
import ClientsIndex from './components/clients/ClientsIndex.vue'

createApp({
    data() {
        return { open: false}
        },
    components: {
        ClientsIndex
    }
}).use(router).mount('#app')
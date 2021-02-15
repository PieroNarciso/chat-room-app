import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BInput from './components/base/BInput.vue';
import BField from './components/base/BField.vue';
import BBtn from './components/base/BBtn.vue';

const app = createApp(App);

app.component('b-input', BInput);
app.component('b-field', BField);
app.component('b-btn', BBtn);

app.use(store);
app.use(router);

app.mount('#app');

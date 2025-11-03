import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { state, dispatch } from './store/store.js' // importing dispatch

createApp(App)
    .provide('store', { state, dispatch }) // providing an object containing global state and function to update/change global state to every component in our app.
    .mount('#app');





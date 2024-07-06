import './assets/main.css'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import About from './components/mainviews/About.vue';
import Contact from './components/mainviews/Contact.vue';
import Projects from './components/mainviews/Projects.vue';
import Resume from './components/secondaryviews/Resume.vue';
import Programs from './components/secondaryviews/Programs.vue';
import Skills from './components/secondaryviews/Skills.vue';
const routes = [
    { path: "/", component: About },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
    { path: "/experience/resume", component: Resume},
    { path: "/experience/programs", component: Programs},
    { path: "/experience/skills", component: Skills},


];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

createApp(App).use(router).mount('#app')


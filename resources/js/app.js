import './bootstrap';
import { createApp } from '../../node_modules/vue/dist/vue.esm-bundler.js';
import PostsIndex from '@/components/posts/index.vue';

const app = createApp();
app.component('posts-index', PostsIndex);
app.mount('#app');

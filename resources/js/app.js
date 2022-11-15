import './bootstrap';
import 'flowbite';
import { createApp } from 'vue';
import PostsIndex from '@/components/posts/Index.vue';


const app = createApp();
app.component('posts-index', PostsIndex);
app.mount('#app');

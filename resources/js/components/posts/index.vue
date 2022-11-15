<template>
  <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
    <div class="min-w-full align-middle">
      <DefaultSpinner v-if="loading"/>
      <table class="min-w-full divide-y divide-gray-200 border" v-show="!loading">
        <thead>
          <tr>
            <th class="px-6 py-3 bg-gray-50 text-left">
              <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</span>
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left">
              <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</span>
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left">
              <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Content</span>
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left">
              <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Created at</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts">
            <td class="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900">
              {{ post.id }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900">
              {{ post.title }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900">
              {{ post.content }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900">
              {{ post.created_at }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DefaultSpinner from '@/components/loaders/DefaultSpinner.vue';
export default {
  components: { DefaultSpinner },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    loading() {
      return !this.posts.length;
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('/api/posts');
        this.posts = response.data;
      } catch (error) {
        console.debug(`fetchPosts error`, error);
      }
    }
  }
}
</script>

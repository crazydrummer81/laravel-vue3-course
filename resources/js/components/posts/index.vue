<template>
	<h1>{{greeting}}</h1>
</template>

<script>
export default {
	name: 'posts-index',
	data() {
		return {
			greeting: 'Hello World!'
		}
	},
	created() {
		console.debug(`created`, this);
	}
}
</script>

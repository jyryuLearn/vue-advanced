<template>
	<div>
		<div v-for="item in news" :key="item.id" >{{ item.title }}</div>
	</div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
	name: "NewsView.vue",
	data() {
		return {
			news: [],
		}
	},
	created() {
		fetchNewsList()
		.then(res => {
			this.news = res.data;
		})
		.catch( err => {
			console.log(err);
		})
	}
}
</script>

<style scoped>

</style>
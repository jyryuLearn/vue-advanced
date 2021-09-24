<template>
	<div>
		<p v-for="ask in fetchedAsk" :key="ask.id" >
			<a :href="ask.url">
				{{ ask.title }}
			</a>
			<small>{{ ask.time_ago }} by {{ ask.user }}</small>
		</p>
<!--		<div v-for="ask in asks" :key="ask.id" >{{ ask.title }}</div>-->
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: "AskView.vue",

	computed: {
		...mapGetters([
			'fetchedAsk'
		])

		// ...mapGetters({
		// 	asks: 'fetchedAsk'
		// })

		// ...mapState({
		// 	asks: state => state.asks
		// })
	},

	created() {
		this.$store.dispatch('FETCH_ASKS');
	}
}
</script>

<style scoped>

</style>
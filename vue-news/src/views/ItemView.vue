<template>
	<div>
		<section>
<!--			ask desc-->
			<div class="user-container">
				<div>
					<i class="fas fa-user"></i>
				</div>
				<div class="user-desc">
					<router-link :to="`/user/${fetchedItem.user}`">
						{{ fetchedItem.user }}
					</router-link>
					<div class="time">
						{{ fetchedItem.time_ago }}
					</div>
				</div>
			</div>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		<section>
<!--			reply-->
			<div v-html="fetchedItem.content"> </div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: "ItemView.vue",

	computed: {
		...mapGetters(['fetchedItem']),
	},

	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', itemId);
	}
}
</script>

<style scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
}
.fa-user {
	font-size: 2.5rem;
}
.user-desc {
	padding-left: 6px;
}
.time {
	font-size: 0.7rem;
}
</style>
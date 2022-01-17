<template>
	<div class="cards-container">
		<base-card
			v-for="card in selectedCards"
			:key="card.id"
			:src="card.src"
			:alt="card.title"
			class="break-inside"
		>
			<div v-if="card.title" class="card-footer">
				<base-button class="card-title" :link="true" url="#">
					{{ card.title }}
				</base-button>
				<p>{{ card.author }}</p>
			</div>
		</base-card>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'CardContainer',
	computed: {
		...mapGetters(['allCards', 'selectedCards']),
	},
	methods: {
		...mapActions(['filterCards']),
	},
	created() {
		this.filterCards({
			type: 'all',
		});
	},
};
</script>

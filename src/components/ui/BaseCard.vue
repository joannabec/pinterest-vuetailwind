<template>
	<div class="mb-5">
		<div
			@mouseover="isVisible = true"
			@mouseleave="isVisible = false"
			class="relative"
		>
			<img :src="src" :alt="alt" class="rounded-lg" />
			<div v-if="isVisible" class="card-content">
				<div class="card-top-btn">
					<base-button>
						<p class="font-semibold text-white">Ui</p>
						<span class="material-icons text-white">expand_more</span>
					</base-button>
					<base-button mode="primary">Save</base-button>
				</div>
				<div class="card-bot-btn">
					<base-button mode="semi">
						<span class="material-icons text-base">ios_share</span>
					</base-button>
					<base-button mode="semi">
						<span class="material-icons text-base">more_horiz</span>
					</base-button>
				</div>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['src', 'alt'],
	data() {
		return {
			isVisible: false,
		};
	},
};
</script>

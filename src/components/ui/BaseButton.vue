<template>
	<a v-if="link" :href="url" class="btn" :class="`btn-${this.mode}`">
		<slot></slot>
	</a>
	<button v-else class="btn" :class="`btn-${this.mode}`">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'BaseButton',
	props: {
		mode: {
			type: String,
		},
		link: {
			type: Boolean,
			default: false,
		},
		url: {
			type: String,
			default: '#',
		},
	},
};
</script>

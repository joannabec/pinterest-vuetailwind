<template>
	<button
		:class="styled"
		class="rounded-full py-3 px-4 font-semibold focus:outline-none focus:ring"
		type="button">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'BaseBtntext',
	props: ['mode', 'text'],
	computed: {
		styled() {
			if(this.mode === 'dark') return 'bg-dark text-white';
			if(this.mode === 'red') return 'bg-primary hover:bg-redHover text-white'
			return 'text-dark hover:bg-light';
		},
	},
};
</script>

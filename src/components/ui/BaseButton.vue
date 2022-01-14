<template>
	<button
		:class="styled"
		class="rounded-full font-semibold md:focus:outline-none md:focus:ring"
		type="button"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	props: ['mode'],
	computed: {
		styled() {
			if(this.mode === 'flat') return 'py-3 px-4 text-dark md:hover:bg-light';
			if(this.mode === 'red') return 'py-3 px-4 bg-primary md:hover:bg-redHover text-white';
			if(this.mode === 'img') return 'hover:bg-light flex-center';
			if(this.mode === 'dark') return 'py-3 px-4 md:bg-dark md:text-white md:hover:bg-dark md:hover:text-white';
			return 'flex items-center';
		},
	},
};
</script>

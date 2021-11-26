<template>
	<button
		class="rounded-full hover:bg-light flex items-center justify-content-center focus:outline-none focus:ring"
		type="button"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseBtnimg',
};
</script>

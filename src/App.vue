<template>
	<the-header></the-header>
	<card-container></card-container>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import CardContainer from './components/layout/CardContainer.vue';
export default {
	name: 'App',
	components: {
		TheHeader,
		CardContainer,
	},
};
</script>

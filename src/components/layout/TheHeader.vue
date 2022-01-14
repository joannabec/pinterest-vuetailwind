<template>
	<div class="px-3 py-4 flex items-center justify-between">
		<div class="flex items-center">

			<base-button mode="img" class="p-3">
				<img src="logo.png" alt="logo" class="h-6 w-6 object-cover" />
			</base-button>

			<div class="relative">

				<base-button mode="flat" class="flex items-center md:hidden" @click="open">
					<span class="md:hidden">Inicio</span>
					<span class="material-icons">expand_more</span>
				</base-button>

				<div class="menu" :class="style">
					<base-button :mode="home" @click="selectedBtn('home')">Home</base-button>
					<base-button :mode="today" @click="selectedBtn('today')">Today</base-button>
					<span class="material-icons md:hidden absolute right-4 pt-1" :class="position">check</span>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-end md:justify-start flex-grow relative">

			<base-button class="mr-9 md:mr-0">
				<span class="material-icons absolute text-muted md:ml-3 text-3xl md:text-2xl">search</span>
			</base-button>

			<input class="hidden md:block text-muted w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10 focus:outline-none focus:ring" 
				placeholder="Search"	
				type="text"	/>

		</div>
		<div class="flex items-center">

			<base-button mode="img" class="relative h-12 w-12">
				<span class="material-icons text-3xl text-muted">notifications</span>
				<div class="rounded-full h-5 w-5 bg-primary text-white flex-center absolute mb-5 ml-4">2</div>
			</base-button>

			<base-button mode="img" class="relative h-12 w-12">
				<span class="material-icons text-3xl text-muted">textsms</span>
				<div class="rounded-full h-5 w-5 bg-primary text-white flex-center absolute mb-5 ml-4">1</div>
			</base-button>

			<base-button mode="img" class="p-3">
				<img src="profile.jpg" alt="profile picture" class="h-6 w-6 rounded-full object-cover" />
			</base-button>

			<base-button mode="img" class="h-6 w-6">
				<span class="material-icons text-muted">expand_more</span>
			</base-button>

		</div>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
	data() {
		return {
			position: 'top-2',
			isOpen: false,
			home: 'dark',
			today: 'flat'
		}
	},
	methods: {
		selectedBtn(val) {
			if(val === 'home') {
				this.position = 'top-2';
				this.home = 'dark';
				this.today = 'flat'
			} else if (val ==='today') {
				this.position = 'top-14';
				this.home = 'flat';
				this.today = 'dark'
			}
		},
		open() {
			this.isOpen = !this.isOpen;
		}
	},
	computed: {
		style() {
			return this.isOpen ? 'max:flex' : 'max:hidden';
		}
	}
};
</script>

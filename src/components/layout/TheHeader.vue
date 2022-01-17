<template>
	<div class="header">
		<nav class="nav-box">
			<base-button mode="flat" :link="true" class="p-3">
				<img src="logo.png" alt="logo" class="nav-logo" />
			</base-button>

			<div class="relative">
				<base-button mode="flat" class="nav-expand-mobile" @click="open">
					<span class="md:hidden">Inicio</span>
					<span class="material-icons">expand_more</span>
				</base-button>

				<div class="nav-list" :class="style">
					<ul class="md:flex">
						<li>
							<base-button
								:mode="home"
								:link="true"
								@click="selectedBtn('home')"
								class="justify-between"
							>
								Home
							</base-button>
						</li>
						<li>
							<base-button
								:mode="today"
								:link="true"
								@click="selectedBtn('today')"
								class="justify-between"
							>
								Today
							</base-button>
						</li>
					</ul>
					<span class="material-icons nav-mobile-check" :class="position">
						check
					</span>
				</div>
			</div>
		</nav>

		<div class="search-box">
			<base-button class="mr-9 md:mr-0">
				<span class="material-icons search-icon">search</span>
			</base-button>
			<input
				class="search-input"
				placeholder="Search"
				type="text"
				v-model.trim="searchingTerm"
				@keyup="search"
			/>
		</div>

		<div class="profile-menu">
			<base-button mode="flat" class="profile-control">
				<span class="material-icons profile-icon">notifications</span>
				<div class="profile-alert">2</div>
			</base-button>
			<base-button mode="flat" class="profile-control">
				<span class="material-icons profile-icon">textsms</span>
				<div class="profile-alert">1</div>
			</base-button>
			<base-button :link="true" mode="flat" class="p-3">
				<img src="profile.jpg" alt="profile picture" class="profile-picture" />
			</base-button>
			<base-button mode="flat" class="h-6 w-6 p-0">
				<span class="material-icons text-muted">expand_more</span>
			</base-button>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'TheHeader',
	data() {
		return {
			searchingTerm: '',
			position: 'top-2',
			isOpen: false,
			home: 'dark',
			today: 'flat',
		};
	},
	methods: {
		...mapActions(['filterCards']),
		search(e) {
			if (this.searchingTerm && e.key === 'Enter') {
				this.filterCards({
					type: 'filter',
					term: this.searchingTerm,
				});
			} else if (!this.searchingTerm) {
				this.filterCards({
					type: 'all',
				});
			}
		},
		selectedBtn(val) {
			if (val === 'home') {
				this.position = 'top-2';
				this.home = 'dark';
				this.today = 'flat';
			} else if (val === 'today') {
				this.position = 'top-14';
				this.home = 'flat';
				this.today = 'dark';
			}
		},
		open() {
			this.isOpen = !this.isOpen;
		},
	},
	computed: {
		style() {
			return this.isOpen ? 'max:flex' : 'max:hidden';
		},
	},
};
</script>

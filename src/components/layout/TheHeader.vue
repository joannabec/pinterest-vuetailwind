<template>
	<div class="px-3 py-4 flex items-center justify-between">
		<div class="flex items-center">
			<base-btnimg class="p-3">
				<img src="logo.png" alt="logo" class="h-6 w-6" />
			</base-btnimg>
			<base-btntext mode="dark" text="Home"></base-btntext>
			<base-btntext text="Today"></base-btntext>
		</div>
		<div class="flex-grow relative">
			<span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
			<input
				class="text-muted w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10 focus:outline-none focus:ring"
				placeholder="Search"
				type="text"
			/>
		</div>
		<div class="flex items-center">
			<base-btnimg class="relative h-12 w-12 flex items-center justify-center">
				<span class="material-icons text-3xl text-muted">notifications</span>
				<div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-4">
					2
				</div>
			</base-btnimg>
			<base-btnimg class="relative h-12 w-12 flex items-center justify-center">
				<span class="material-icons text-3xl text-muted">textsms</span>
				<div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-4">
					1
				</div>
			</base-btnimg>
			<base-btnimg class="p-3">
				<img
					src="profile.jpg"
					alt="profile picture"
					class="h-6 w-6 rounded-full object-cover"
				/>
			</base-btnimg>
			<base-btnimg class="h-6 w-6">
				<span class="material-icons text-muted">expand_more</span>
			</base-btnimg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

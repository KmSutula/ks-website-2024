<template>
		<a href="#" class="nav-tabs--mobile-open" :class="{'is-expanded': isExpanded}" @click.prevent="expandMobileMenu"><Icon icon="mingcute:menu-fill"/></a>
		<div class="nav-tabs--mobile slide-out" ref="mobileMenu">
			<a href="#" class="nav-tabs--mobile-close" @click.prevent="expandMobileMenu">
				<Icon icon="ep:close-bold"></Icon>
			</a>
			<div class="nav-tabs--mobile-main">
				<a href="#about" class="nav-tab" @click="expandMobileMenu">About</a>
				<a href="#projects" class="nav-tab" @click="expandMobileMenu">Projects</a>
				<a href="#technologies" class="nav-tab" @click="expandMobileMenu">Technologies</a>
				<a href="#programs" class="nav-tab" @click="expandMobileMenu">Programs</a>
				<a href="#resume" class="nav-tab" @click="expandMobileMenu">Resume</a>
				<a href="#contact" class="nav-tab" @click="expandMobileMenu">Contact</a>
			</div>
		</div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
	data() {
		return {
			isExpanded: false
		};
	},
	methods: {
		expandMobileMenu() {
			this.isExpanded = !this.isExpanded;
			if (!this.isExpanded){
				this.$refs.mobileMenu.classList.add("slide-out");
				document.body.classList.remove("is-locked");
			} else {
				this.$refs.mobileMenu.classList.remove("slide-out");
				document.body.classList.add("is-locked");
			}
		},
	},
};
</script>

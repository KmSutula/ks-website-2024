<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
	data() {
		return {
			isSubMenu: false,
			isExpanded: false
		};
	},
	mounted() {
		this.changeMobileMenuState();
	},
	methods: {
		setMenuView() {
			this.isSubMenu = true;
			this.$refs.mainMenu.classList.add("slide-out");
			this.$refs.secondMenu.classList.remove("slide-out");
			this.$refs.mainMenuMobile.classList.add("slide-out");
			this.$refs.secondMenuMobile.classList.remove("slide-out");
		},
		resetMenuView() {
			this.isSubMenu = false;
			this.$refs.mainMenu.classList.remove("slide-out");
			this.$refs.secondMenu.classList.add("slide-out");
			this.$refs.mainMenuMobile.classList.remove("slide-out");
			this.$refs.secondMenuMobile.classList.add("slide-out");
		},
		changeMobileMenuState() {
			if (window.location.href.includes("experience")) {
				this.isSubMenu = true;
				this.$refs.mainMenu.classList.add("slide-out");
				this.$refs.mainMenuMobile.classList.add("slide-out");
				this.$refs.secondMenu.classList.remove("slide-out");
				this.$refs.secondMenuMobile.classList.remove("slide-out");
			} else {
				this.$refs.secondMenuMobile.classList.add("slide-out");
				this.$refs.secondMenu.classList.add("slide-out");
			}
		},
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
		setIsLoading(isMobileClick: boolean) {
			if (isMobileClick) {
				this.expandMobileMenu();
			}
			this.$emit("setIsLoading", true);
		},
	},
};
</script>

<template>
		<a href="#" class="nav-tabs--mobile-open" :class="{'is-expanded': isExpanded}" @click.prevent="expandMobileMenu"><Icon icon="mingcute:menu-fill"/></a>
		<div class="nav-tabs--mobile slide-out" ref="mobileMenu">
			<a href="#" class="nav-tabs--mobile-close" @click.prevent="expandMobileMenu">
				<Icon icon="ep:close-bold"></Icon>
			</a>
			<div class="nav-tabs--mobile-experience slide-out" ref="secondMenuMobile">
				<a href="#" class="nav-tab" @click.prevent="resetMenuView">
					<Icon icon="charm:chevron-left"/> Back</a>
				<RouterLink to="/experience/skills" class="nav-tab" @click="setIsLoading(true)">
					Skills</RouterLink>
				<RouterLink to="/experience/programs" class="nav-tab" @click="setIsLoading(true)">Programs</RouterLink>
				<RouterLink to="/experience/resume" class="nav-tab" @click="setIsLoading(true)">Resume</RouterLink>
			</div>
			<div class="nav-tabs--mobile-main" ref="mainMenuMobile">
				<RouterLink to="/" class="nav-tab" @click="setIsLoading(true)">About</RouterLink>
				<a href="#" class="nav-tab" @click.prevent="setMenuView">Experience</a>
				<RouterLink to="/projects" class="nav-tab" @click="setIsLoading(true)">Projects</RouterLink>
				<RouterLink to="/contact" class="nav-tab" @click="setIsLoading(true)">Contact</RouterLink>
			</div>
		</div>
		<div class="nav-tabs--main" ref="mainMenu">
			<RouterLink to="/" class="nav-tab" @click="setIsLoading(false)">About</RouterLink>
			<a href="#" class="nav-tab" @click.prevent="setMenuView">Experience</a>
			<RouterLink to="/projects" class="nav-tab" @click="setIsLoading(false)">Projects</RouterLink>
			<RouterLink to="/contact" class="nav-tab" @click="setIsLoading(false)">Contact</RouterLink>
		</div>
		<div class="nav-tabs--experience slide-out" ref="secondMenu">
			<a href="#" class="nav-tab" @click.prevent="resetMenuView">
				<Icon icon="charm:chevron-left"/> Back</a>
			<RouterLink to="/experience/skills" class="nav-tab" @click="setIsLoading(false)">
				Skills</RouterLink>
			<RouterLink to="/experience/programs" class="nav-tab" @click="setIsLoading(false)">Programs</RouterLink>
			<RouterLink to="/experience/resume" class="nav-tab" @click="setIsLoading(false)">Resume</RouterLink>
		</div>
</template>

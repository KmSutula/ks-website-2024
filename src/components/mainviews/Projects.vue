<template>
<div class="projects is-hidden" ref="projects">
	<Icon class="projects--nav nav-left" icon="charm:chevron-left" @click="stepLeft"></Icon>
	<h2 class="projects--header">Projects</h2>
	<div class="projects--entries">
		<div class="projects--entry" ref="project" v-for="(project, index) in projectsData" v-bind:key="index" :class="{ 'is-hidden': index !== 0 }" :data-order="`${index}`">
			<div class="projects--entry-left">
				<img class="projects--entry-image" :src="`/src/assets/${project.projectImage}`" />
			</div>
			<div class="projects--entry-right">
				<h3 class="projects--entry-header">{{ project.projectName }}</h3>
				<h4 class="projects--entry-tech">
					<span v-for="(tech, index) in project.technologies">
						{{ tech }}
						<Icon icon="ph:dot-fill" v-if="index !== (project.technologies.length - 1)" class="projects--entry-tech--separator"></Icon>
					</span>
				</h4>
				<p class="projects--entry-desc">{{ project.description }}</p>
				<div class="projects--entry--btn-holder">
					<a class="projects--entry-btn btn" :href="project.codeLink" target="_blank">Code</a>
					<a class="projects--entry-btn btn" :href="project.projectLink" target="_blank">Demo</a>
				</div>
			</div>
		</div>
	</div>
	<Icon class="projects--nav nav-right" icon="charm:chevron-right" @click="stepRight"></Icon>
</div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
	emits: [
		"setIsLoading",
	],
	data() {
		return {
			projectsData: null,
			activeSlide: 0,
		};
	},
	async mounted() {
		this.projectsData = await fetch("/projectList.json").then(response => response.json()).then(data => data.projects);

		this.$nextTick(() => {
			setTimeout(() => {
				this.$emit("setIsLoading", false);
				 this.$refs.projects.classList.remove('is-hidden');
			}, 300);
		})
	},
	methods: {
		stepLeft() {
			this.$refs.project[this.activeSlide].classList.add("is-hidden");
			if (this.activeSlide === 0) {
				this.activeSlide = this.projectsData.length - 1;
			} else {
				this.activeSlide--;
			}
			setTimeout(() => {
				this.$refs.project[this.activeSlide].classList.remove("is-hidden");

			}, 600)

		},
		stepRight() {
			this.$refs.project[this.activeSlide].classList.add("is-hidden");
			if (this.activeSlide === this.projectsData.length - 1) {
				this.activeSlide = 0;

			} else {
				this.activeSlide++;
			}

			setTimeout(() => {
				this.$refs.project[this.activeSlide].classList.remove("is-hidden");
			}, 600);
		}
	},
};
</script>




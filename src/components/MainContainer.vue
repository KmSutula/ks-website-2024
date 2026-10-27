<script lang="ts">
import { Icon } from '@iconify/vue';
import About from './mainviews/About.vue';
import Projects from './mainviews/Projects.vue';
import Contact from './mainviews/Contact.vue';
import Skills from './secondaryviews/Skills.vue';
import Programs from './secondaryviews/Programs.vue';
import Resume from './secondaryviews/Resume.vue';

export default {
	props: {
		isLoading: Boolean,
	},
	components: {
		Icon,
		About,
		Projects,
		Skills,
		Programs,
		Resume,
		Contact,
	},
	emits: [
		"setIsLoading",
	],
	data() {
		return {
			sections: [
				{ id: "about", title: "About", component: "About" },
				{ id: "projects", title: "Projects", component: "Projects" },
				{ id: "technologies", title: "Technologies", component: "Skills" },
				{ id: "programs", title: "Programs", component: "Programs" },
				{ id: "resume", title: "Resume", component: "Resume" },
				{ id: "contact", title: "Contact", component: "Contact" },
			],
			focusedSection: "about",
			observer: null as IntersectionObserver | null,
		};
	},
	mounted() {
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.focusedSection = entry.target.id;
				}
			});
		}, { rootMargin: "-50% 0px -50% 0px" });

		(this.$refs.section as HTMLElement[]).forEach((section) => this.observer?.observe(section));
	},
	beforeUnmount() {
		this.observer?.disconnect();
	},
	methods: {
		setIsLoading(isLoading: boolean) {
			this.$emit("setIsLoading", isLoading);
		}
	},

};
</script>

<template>
	<div class="main--content">
		<Icon v-if="isLoading" class="loader" icon="svg-spinners:tadpole"></Icon>
		<section
			v-for="section in sections"
			:key="section.id"
			:id="section.id"
			class="section"
			:class="{ 'is-focused': focusedSection === section.id }"
			ref="section"
		>
			<div class="section--header">
				<a :href="`#${section.id}`" class="nav-tab" :class="{ 'is-active': focusedSection === section.id }">{{ section.title }}</a>
			</div>
			<div class="section--body">
				<component :is="section.component" @setIsLoading="setIsLoading" />
			</div>
		</section>
	</div>
</template>

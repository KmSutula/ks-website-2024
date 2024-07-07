<template>
    <div class="resume is-hidden" ref="resume">
        <h1 class="resume--header">Resume</h1>
		<div class="resume--preview">
        <iframe src="/SutulaResume.pdf" width="100%" height="100%">
			</iframe>
		</div>
        <a class="resume--download btn" href="/SutulaResume.pdf" download>Download</a>
    </div>
</template>

<script lang="ts">
export default {
	emits: [
		"setIsLoading",
	],
	data() {
		return {
			newPromo: "",

		};
	},
	computed: {

	},
	watch: {

	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.$emit("setIsLoading", false);
				 this.$refs.resume.classList.remove('is-hidden');
			}, 300);
		});

	},
};
</script>

<template>
    <div class="resume is-hidden" ref="resume">
		<div class="resume--preview">
        <iframe src="/SutulaResume.pdf" width="100%" height="100%" title="Resume">
			</iframe>
		</div>
        <a class="resume--download btn" href="/SutulaResume.pdf" download>Download</a>
    </div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			newPromo: "",

		};
	},
	computed: {

	},
	watch: {

	},
};
</script>

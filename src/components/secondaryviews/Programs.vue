<template>
    <div class="programs is-hidden" ref="programs">
        <h2 class="programs--header">Programs</h2>
        <div v-for="program in programData" class="programs--entry">
			<h3 class="programs--entry-name">{{ program.programName }}</h3>
			<h3 class="programs--entry-issuer">{{ program.issuer }}</h3>
			<a v-if="program.certificationLink" class="programs--entry-certificate btn" target="_blank" :href="program.certificationLink">Certificate</a>
			<span class="programs--entry-date">{{program.completionDate}}</span>
        </div>
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
            programData: null,
		};
	},
	async mounted() {
        this.programData = await fetch("/programList.json").then(response => response.json()).then(data => data.programs);

		this.$nextTick(() => {
			setTimeout(() => {
				this.$emit("setIsLoading", false);
				 this.$refs.programs.classList.remove('is-hidden');
			}, 300);
		});
	},
};
</script>


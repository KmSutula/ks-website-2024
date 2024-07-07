<template>
	<div class="about is-hidden" ref="about">
		<div class="about--header">
			<h2 class="about--subheader-one">hey there,</h2>
			<div class="about--subheader-two">
				<span>I'm</span>
				<span><img class="about--subheader-image" src="/k.png"/>aleigh
				</span>
				<span>
					<img class="about--subheader-image" src="/s.png"/>utula...
				</span>
			</div>
		</div>
		<div class="about--left">
			<img class="about--image" src="/headshot.png"/>
		</div>
		<div class="about--right">
			<p class="about--text">Uber passionate about making code readable to every member of the team, never making the same mistake thrice, mastering new technologies, picking apart concepts I don't understand, and lending a helping hand.
			<br/>
			I am currently working with Multitracks.com as a Junior Front End Developer, and use my free time to develop sites that help increase my productivity and indulge my hobbies.</p>
		</div>
	</div>
</template>

<script lang="ts">

export default {
	emits: [
		"setIsLoading"
	],
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			newPromo: "",
			isLoading: true,

		};
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.$emit("setIsLoading", false);
				 this.$refs.about.classList.remove('is-hidden');
			}, 300);
		});
	},

};
</script>

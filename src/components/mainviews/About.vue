<template>
	<div class="about is-hidden" ref="about">
		<div class="about--header">
			<h2 class="about--subheader-one">hey there,</h2>
			<div class="about--subheader-two">
				<span>I'm</span>
				<span><img class="about--subheader-image" src="/k.png" alt="k"/>aleigh
				</span>
				<span>
					<img class="about--subheader-image" src="/s.png" alt="s"/>utula...
				</span>
			</div>
		</div>
		<div class="about--left">
			<img class="about--image" src="/headshot.png" alt="Headshot of Kaleigh Sutula"/>
		</div>
		<div class="about--right">
			<h3 class="about--right--header">Frontend Engineer · Team Lead</h3>
			<p class="about--text">
				I build maintainable web applications with Vue, TypeScript, and ASP.NET Core.<br/>
				Uber passionate about making code readable to every member of the team, never making the same mistake thrice, mastering new technologies, picking apart concepts I don't understand, and lending a helping hand.
				<br/>
			</p>
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

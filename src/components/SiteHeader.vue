<template>
	<div class="header">
		<span class="header--text-left" @mouseover="showText('first')" ref="first">wo ich erschaffe,</span>
		<a href="/"><img class="header--logo" src="/logo.png"/></a>
		<span class="header--text-right" @mouseover="showText('second')" ref="second">da bin ich wahr</span>

	</div>
</template>

<script lang="ts">
export default {
	methods: {
		showText(text: string) {
			if (text === 'first') {
				this.$refs.first.innerText = 'where I create,'
			} else {
				this.$refs.second.innerText = 'there I am true'
			}
		},
	},
};
</script>


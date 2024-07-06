<script lang="ts">
import { Icon } from '@iconify/vue';


export default {
	components: {
		Icon,
	},
};
</script>

<template>
	<div class="social-tab--container">
		<a class="social-tab" href="https://x.com/kmsutula">
			<Icon icon="mingcute:social-x-line"/>
		</a>
		<a class="social-tab" href="https://github.com/KmSutula">
			<Icon icon="mingcute:github-line"/>

		</a>
		<a class="social-tab" href="https://www.linkedin.com/in/kaleighsutula/">
			<Icon icon="eva:linkedin-outline"/>
		</a>
		<a class="social-tab" href="mailto:kaleighsutula@gmail.com">
			<Icon icon="iconamoon:email-bold"/>
		</a>
	</div>

</template>

<style scoped>

</style>

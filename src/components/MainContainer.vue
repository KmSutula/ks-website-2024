<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
	props: {
		isLoading: Boolean,
	},
	components: {
		Icon,
	},
	emits: [
		"setIsLoading",
	],
	data() {
		return {
			newPromo: "",
		};
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
		<RouterView @setIsLoading="setIsLoading"></RouterView>
	</div>
</template>


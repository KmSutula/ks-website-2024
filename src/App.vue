<script lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SocialTabs from './components/SocialTabs.vue';
import MainContainer from './components/MainContainer.vue';
import NavigationTabs from './components/NavigationTabs.vue';

export default {
  components: {
    SiteHeader,
    SocialTabs,
    MainContainer,
    NavigationTabs,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
  },
  methods: {
    setIsLoading(isLoading: boolean) {
			this.isLoading = isLoading;
		}
  }
}
</script>

<template>
    <div class="wrapper">
        <div class="main">
          <SiteHeader />
          <NavigationTabs @setIsLoading="setIsLoading" :isLoading="isLoading" />
          <MainContainer @setIsLoading="setIsLoading" :isLoading="isLoading"/>
          <SocialTabs />
        </div>
    </div>

</template>

<style scoped>

</style>

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
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<template>
    <div class="wrapper">
        <div class="main">
          <SiteHeader />
          <NavigationTabs />
          <MainContainer />
          <SocialTabs />
        </div>
    </div>

</template>

<style scoped>

</style>

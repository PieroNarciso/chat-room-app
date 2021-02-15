<template>
  <the-nav-bar></the-nav-bar>
  <div class="container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavBar from '@/components/layout/TheNavBar.vue';

export default defineComponent({
  components: {
    TheNavBar,
  },
});
</script>

<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss">
body {
  background: #fafafa;
}
div.container {
  height: 100vh;
}
</style>

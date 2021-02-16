<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-8">
      <form-login></form-login>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLogin from '@/components/FormLogin.vue';

export default defineComponent({
  components: {
    FormLogin,
  },
});
</script>

<style lang="scss" scoped>
div.row {
  height: 100vh;
}
</style>

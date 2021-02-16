<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-8">
      <form-register></form-register>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormRegister from '@/components/FormRegister.vue';

export default defineComponent({
  components: {
    FormRegister,
  },
});
</script>

<style lang="scss" scoped>
div.row {
  height: 100vh;
}
</style>

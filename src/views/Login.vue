<template>
  <div class="row mt-4">
    <div class="col">
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

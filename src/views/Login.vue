<template>
  <div>
    <form-login></form-login>
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

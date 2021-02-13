<template>
  <form-register></form-register>
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

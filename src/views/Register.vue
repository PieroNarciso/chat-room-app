<template>
  <div class="row mt-4">
    <div class="col">
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

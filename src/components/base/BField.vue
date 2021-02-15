<template>
  <div class="mb-3" v-bind="$attrs">
    <label class="form-label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
    },
  },
});
</script>

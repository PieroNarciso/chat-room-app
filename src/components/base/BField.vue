<template>
  <div class="field" v-bind="$attrs">
    <label class="label">{{ label }}</label>
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

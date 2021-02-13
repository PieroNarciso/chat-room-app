<template>
  <span class="icon-text">
    <span class="icon" :class="[iconLeft]" v-bind="$attrs">
      <i class="mdi" :class="[iconName]"></i>
    </span>
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const iconName = computed(() => props.icon);
    const iconLeft = computed(() => ({
      'is-left': props.left,
    }));

    return {
      iconName,
      iconLeft,
    };
  },
});
</script>

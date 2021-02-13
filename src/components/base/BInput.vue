<template>
  <p class="control" :class="clsHasIcon">
    <input
      v-bind="$attrs"
      class="input"
      :class="clsObject"
      :value="modelValue"
      @change="updateModelValue"
    >
    <slot v-if="hasIcon"></slot>
  </p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    rounded: {
      type: Boolean,
      default: false,
    },
    hovered: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const clsObject = computed(() => ({
      'is-rounded': props.rounded,
      'is-hovered': props.hovered,
      'is-static': props.static,
    }));

    const clsHasIcon = computed(() => ({
      'has-icons-left': props.hasIcon,
    }));

    const updateModelValue = (event: { target: HTMLInputElement }) => {
      context.emit('update:modelValue', event.target.value);
    };

    return {
      clsObject,
      clsHasIcon,
      updateModelValue,
    };
  },
});
</script>

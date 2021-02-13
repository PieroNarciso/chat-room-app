<template>
  <router-link
    v-if="to"
    class="button"
    :class="clsBtn"
    v-bind="$attrs"
    :to="to"
  >
    <slot></slot>
  </router-link>
  <button
    v-else
    class="button"
    :class="clsBtn"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    light: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const clsBtn = computed(() => ({
      'is-light': props.light,
      'is-outlined': props.outlined,
      'is-rounded': props.rounded,
      'is-loading': props.loading,
    }));

    return {
      clsBtn,
    };
  },
});
</script>

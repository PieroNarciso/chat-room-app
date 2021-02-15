<template>
  <router-link
    v-if="to"
    class="btn"
    :class="clsBtn"
    v-bind="$attrs"
    :to="to"
    :disabled="loading"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <slot></slot>
  </router-link>
  <button
    v-else
    class="btn"
    :class="clsBtn"
    v-bind="$attrs"
    :disabled="loading"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
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

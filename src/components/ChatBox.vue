<template>
  <div class="tile is-parent">
    <div
      :class="clsColor"
      class="tile is-child notification is-light p-2">
      <p class="has-text-weight-medium">{{ message.user.username }}</p>
      {{ message.msg }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Message } from '@/types';

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const clsColor = computed(() => ({
      'is-info': props.message.user.id !== props.currentUserId,
      'is-success': props.message.user.id === props.currentUserId,
    }));

    return {
      clsColor,
    };
  },
});
</script>

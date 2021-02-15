<template>
  <li
    class="list-group-item"
    :class="clsColor"
  >
    <h6>{{ message.user.username }}</h6>
    {{ message.msg }}
  </li>
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
      'list-group-item-primary': props.message.user.id !== props.currentUserId,
      'list-group-item-success': props.message.user.id === props.currentUserId,
    }));

    return {
      clsColor,
    };
  },
});
</script>

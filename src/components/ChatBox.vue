<template>
  <div class="d-grid" :class="clsPos">
    <div><em>{{ message.user.username }}</em></div>
    <div :class="clsColor" class="py-1 px-3">
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
    const selfMessage = computed(() => props.message.user.id === props.currentUserId);

    const clsColor = computed(() => {
      if (selfMessage.value) {
        return [
          'bg-primary',
          'text-white',
          'self-message',
        ];
      }
      return [
        'bg-secondary',
        'text-white',
        'other-message',
      ];
    });

    const clsPos = computed(() => {
      if (selfMessage.value) {
        return 'self-position';
      }
      return 'other-position';
    });

    return {
      clsColor,
      clsPos,
    };
  },
});
</script>

<style lang="scss" scoped>
.self-message {
  border-radius: 14px 14px 0 14px;
}

.other-message {
  border-radius: 14px 14px 14px 0;
}

.self-position {
  justify-content: end;
  justify-items: end;
}

.other-position {
  justify-content: start;
  justify-items: start;
}
</style>

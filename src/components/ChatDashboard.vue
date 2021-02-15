<template>
  <div class="card chat-container">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item"
        v-for="msg in messages"
        :key="msg.id"
      >
        <chat-box
          :message="msg"
          :current-user-id="userId"
        ></chat-box>
      </li>
    </ul>
  </div>
  <form @submit.prevent="sendMessage">
    <div class="input-group">
      <b-input
        type="text"
        v-model="message"
        class="is-expanded"
        placeholder="Write Message"
        ></b-input>
      <b-btn class="btn-primary">Send Message</b-btn>
    </div>
  </form>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref,
} from 'vue';
import { useStore } from 'vuex';
import { io } from 'socket.io-client';
import ChatBox from '@/components/ChatBox.vue';
import { Message } from '@/types';

export default defineComponent({
  components: {
    ChatBox,
  },
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const socket = io('http://localhost:8081/messages');

    const scrollToBottom = () => {
      const container = document.querySelector('.chat-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    };

    socket.on('message', (data: string) => {
      console.log(data);
      scrollToBottom();
    });

    socket.on('sendMessage', async (data: Message) => {
      await store.commit('appendMessage', data);
      scrollToBottom();
    });

    const message = ref('');
    const messages = computed<Message[]>(() => store.getters.messages);

    const sendMessage = () => {
      socket.emit('sendMessage', {
        userId: props.userId,
        msg: message.value,
      });
      message.value = '';
    };

    return {
      message,
      messages,
      sendMessage,
    };
  },
});
</script>

<style lang="scss">
.chat-container{
  height: 85vh;
  overflow: auto;
}
</style>

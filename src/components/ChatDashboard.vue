<template>
  <div class="chat-container" v-bind="$attrs">
    <div class="card">
      <chat-navbar></chat-navbar>
      <div class="d-flex flex-column overflow-auto" id="chat-content">
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
          <b-btn class="btn-success">Send Message</b-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref,
} from 'vue';
import { useStore } from 'vuex';
import { io } from 'socket.io-client';
import ChatBox from '@/components/ChatBox.vue';
import { Message } from '@/types';
import ChatNavbar from '@/components/layout/ChatNavbar.vue';

export default defineComponent({
  components: {
    ChatBox,
    ChatNavbar,
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
      const container = document.querySelector('#chat-content');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    };

    socket.on('message', () => {
      scrollToBottom();
    });

    socket.on('sendMessage', async (data: Message) => {
      await store.commit('appendMessage', data);
      scrollToBottom();
    });

    const message = ref('');
    const messages = computed<Message[]>(() => store.getters.messages);

    const sendMessage = () => {
      if (message.value.length === 0) return;
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

<style lang="scss" scoped>
div.chat-container {
  height: 100%;
}
div#chat-content {
  height: 80vh;
}
</style>

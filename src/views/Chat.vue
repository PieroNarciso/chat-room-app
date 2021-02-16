<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-10">
      <chat-dashboard :userId="user.id"></chat-dashboard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { User } from '@/types';
import ChatDashboard from '@/components/ChatDashboard.vue';

export default defineComponent({
  components: {
    ChatDashboard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const getMessages = async () => {
      await store.dispatch('getMessages');
    };
    getMessages();

    const user = computed<User>(() => store.getters.user);

    const logout = async () => {
      await store.dispatch('logoutUser');
      if (!store.getters.isLogin) {
        router.push({ name: 'Login' });
      }
    };
    return {
      user,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
div.row {
  height: 100vh;
}
</style>

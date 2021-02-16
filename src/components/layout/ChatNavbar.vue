<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <span
        class="navbar-brand text-uppercase fw-bolder"
      >
        {{ user.username }}
      </span>
      <b-btn
        class="btn-outline-light"
        @click="logoutUser"
      >
        Logout
      </b-btn>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { User } from '@/types';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed<User>(() => store.getters.user);

    const logoutUser = async () => {
      await store.dispatch('logoutUser');
      router.push({ name: 'Home' });
    };

    return {
      user,
      logoutUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  border-radius: 6px 6px 0 0;
}
</style>

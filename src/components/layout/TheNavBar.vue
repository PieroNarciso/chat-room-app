<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>

      <div class="d-flex" v-if="isLogin">
        <b-btn class="btn-secondary me-2">{{ user.username }}</b-btn>
        <b-btn class="btn-secondary" @click="logout">Logout</b-btn>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLogin = computed(() => store.getters.isLogin);
    const user = computed(() => store.getters.user);
    const logout = async () => {
      await store.dispatch('logoutUser');
      router.push({ name: 'Home' });
    };

    return {
      isLogin,
      user,
      logout,
    };
  },
});
</script>

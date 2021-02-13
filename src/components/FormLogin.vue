<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-size-3">Login Form</p>
      <form @submit.prevent="login">
        <b-field label="Username">
          <b-input
            placeholder="Username"
            v-model="username"
            has-icon
          >
            <b-icon icon="mdi-account" left></b-icon>
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            placeholder="Password"
            v-model="password"
            type="password"
            has-icon
          >
            <b-icon icon="mdi-lock" left></b-icon>
          </b-input>
        </b-field>
        <b-field class="is-grouped">
          <div class="control">
            <b-btn class="is-link">Submit</b-btn>
          </div>
          <div class="control">
            <b-btn class="is-link" outlined to="/register">Register</b-btn>
          </div>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const login = async () => {
      await store.dispatch('login', {
        username: username.value,
        password: password.value,
      });
      if (store.getters.isLogin) {
        router.push({ name: 'Chat' });
      }
    };

    return {
      username,
      password,
      login,
    };
  },
});
</script>

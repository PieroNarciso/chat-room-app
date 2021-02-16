<template>
  <div class="card shadow">
    <div class="card-body">
      <h5 class="card-title">Login Form</h5>
      <form @submit.prevent="login">
        <b-field label="Username">
          <b-input
            placeholder="Username"
            v-model.trim="username"
          ></b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            placeholder="Password"
            v-model="password"
            type="password"
          ></b-input>
        </b-field>
          <div class="d-flex">
            <b-btn
              class="btn-primary me-2"
              :loading="submitLoading"
            >
              Submit
            </b-btn>
            <b-btn
              class="btn-outline-primary"
              outlined to="/register"
            >
              Register
            </b-btn>
          </div>
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

    const submitLoading = ref(false);

    const login = async () => {
      submitLoading.value = true;
      await store.dispatch('login', {
        username: username.value,
        password: password.value,
      });
      submitLoading.value = false;
      if (store.getters.isLogin) {
        router.push({ name: 'Chat' });
      }
    };

    return {
      username,
      password,
      login,
      submitLoading,
    };
  },
});
</script>

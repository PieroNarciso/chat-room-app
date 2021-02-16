<template>
  <div class="card shadow">
    <div class="card-body">
      <h5 class="card-title">Register Form</h5>
      <form @submit.prevent="register">
        <b-field label="Username">
          <b-input
            placeholder="Username..."
            v-model.trim="user.username"
          ></b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            placeholder="Email..."
            type="email"
            v-model.trim="user.email"
          ></b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            placeholder="Password..."
            v-model="user.password"
            type="password"
          ></b-input>
        </b-field>
        <div class="d-flex">
            <b-btn
              class="btn-primary me-2"
              :loading="isLoading"
            >
              Submit
            </b-btn>
            <b-btn
              class="btn-outline-primary"
              to="/login"
              outlined
            >
              Login
            </b-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = reactive({
      username: '',
      email: '',
      password: '',
    });

    const isLoading = ref(false);

    const register = async () => {
      isLoading.value = true;
      await store.dispatch('register', user);
      isLoading.value = false;
      if (store.getters.isLogin) {
        router.push({ name: 'Chat' });
      }
    };

    return {
      user,
      register,
      isLoading,
    };
  },
});
</script>

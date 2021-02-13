<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-3">Register Form</p>
      <form @submit.prevent="register">
        <b-field label="Username">
          <b-input
            placeholder="Username..."
            v-model="user.username"
          ></b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            placeholder="Email..."
            type="email"
            v-model="user.email"
          ></b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            placeholder="Password..."
            v-model="user.password"
            type="password"
          ></b-input>
        </b-field>
        <b-field class="is-grouped">
          <div class="control">
            <b-btn
              class="is-link"
              :loading="isLoading"
            >
              Submit
            </b-btn>
          </div>
          <div class="control">
            <b-btn
              class="is-link"
              to="/login"
              outlined
            >
              Login
            </b-btn>
          </div>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

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
    };

    return {
      user,
      register,
      isLoading,
    };
  },
});
</script>

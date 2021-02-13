import { createStore } from 'vuex';

import { User, Message, LoginData } from '@/types';
import axios from '@/plugins/axios';

export default createStore({
  state: {
    user: {} as User,
    isLogin: false,
    messages: [] as Message[],
  },
  getters: {
    user: (state) => state.user,
    isLogin: (state) => state.isLogin,
    messages: (state) => state.messages,
  },
  mutations: {
    logoutUser: (state) => {
      state.isLogin = false;
    },
    setUser: (state, payload: User) => {
      state.user = payload;
      state.isLogin = true;
    },
    setMessages: (state, payload: Message[]) => {
      state.messages = payload;
    },
    appendMessage: (state, payload: Message) => {
      state.messages.push(payload);
    },
  },
  actions: {
    login: async (context, payload: LoginData) => {
      try {
        const res = await axios.post('/user/login', payload);
        context.commit('setUser', res.data);
      } catch (err) {
        console.error(err);
      }
    },
    register: async (context, payload) => {
      try {
        const res = await axios.post('/user/register', payload);
        if (res.status === 201) {
          context.dispatch('login', {
            username: res.data.username,
            password: payload.password,
          });
        }
      } catch (err) {
        console.error(err);
      }
    },
    logoutUser: async (context) => {
      try {
        await axios.post('/user/logout');
        context.commit('logoutUser');
      } catch (err) {
        console.error(err);
      }
    },
    getUser: async (context) => {
      try {
        const res = await axios.get('/user');
        if (res.status === 200) {
          context.commit('setUser', res.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    getMessages: async (context) => {
      try {
        const res = await axios.get('/message');
        if (res.status === 200) {
          context.commit('setMessages', res.data);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});

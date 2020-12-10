<template>
  <div>
    <form class="flex flex-col items-center" @submit.prevent="loginUser">
      <div class="flex flex-col user">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userName"
          >User Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="username"
          id="userName"
        />
      </div>
      <div class="flex flex-col mt-10">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="password"
        />
      </div>
      <!-- eslint-disable -->
      <button class="btn-blue">Sign in</button>
    </form>
    <div class="text-red-600">{{ error.message }}</div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
  import { mapActions } from 'vuex';
  import { Action } from 'vuex-class';

  @Component
  export default class LoginComponent extends Vue {
    username = '';
    password = '';
    email = '';
    error = '';

    @Action('auth/login')
    login!: ({ username, password }: any) => void;
    async loginUser() {
      try {
        const { username, password } = this;
        await this.login({ username, password });
        this.$router.push('/albums');
      } catch (error) {
        console.error(error);
        this.error = error;
      }
    }
  }
</script>

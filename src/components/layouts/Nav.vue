<template>
  <div>
    <ul class="flex justify-end">
      <li class="mr-6" v-if="!user">
        <router-link to="/">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Login</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer"
            >Sign Up</a
          >
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="font-semibold text-black-500">
          Welcome {{ user.username }}
        </div>
      </li>
      <li class="mr-6" v-if="user">
        <router-link to="/albums">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">
            Albums
          </div>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div
          class="text-blue-500 hover:text-blue-800 cursor-pointer"
          @click="logoutUser"
        >
          Logout
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';

  @Component
  export default class extends Vue {
    @Getter('auth/user') user: any;
    @Action('auth/logout')
    logout!: () => any;
    async logoutUser() {
      await this.logout();
      this.$router.push('/');
    }
  }
</script>

<style scoped></style>

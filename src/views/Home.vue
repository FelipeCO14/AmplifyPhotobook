<template>
  <div class="main">
    <LoginComponent />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginComponent from '../components/functionalities/LoginComponent.vue';
  import { Getter } from 'vuex-class';

  @Component({
    components: {
      LoginComponent,
    },
  })
  export default class Home extends Vue {
    @Getter('auth/user') user: any;
    mounted() {
      //if user is authenticated and tries to go to home page (login page), redirects user to albums page
      if (this.user) {
        this.$router.push('/albums');
      }
    }
  }
</script>

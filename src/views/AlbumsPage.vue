<template language="ts">
  <div>
    <h3 class="text-3xl">Create Or Choose An Album</h3>
    <div class="flex flex-col m-auto w-64">
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Album Name..."
        type="text"
        v-model="albumName"
      />
      <button class="btn-blue mb-4" @click="createAlbumData()">
        Create Album
      </button>
    </div>
    <div class="text-red-500">{{ error }}</div>
    <hr />
    <h5 class="mt-4 text-2xl">List Of Albums</h5>
    <div class="flex flex-wrap w-full m-auto justify-center">
      <div
        v-for="(album, idx) in albums"
        :key="idx"
        class="cursor-pointer mt-4 ml-4 w-3/12 h-24 shadow-xl flex items-center justify-center"
        @click="openAlbumDetail(album)"
      >
        <div class="text-2xl">{{ album.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';

  @Component
  export default class AlbumsPage extends Vue {
    @Action('albumInfo/getAlbumsData')
    getAlbumsData!: () => any;

    @Action('albumInfo/createAlbum')
    createAlbum!: (newAlbum: any) => any;

    @Getter('auth/user') user: any;
    @Getter('albumInfo/albums') albums: any;

    albumName = '';
    error = '';

    mounted() {
      this.getAlbumsData();
    }
    openAlbumDetail(album: any) {
      this.$router.push(`/albumDetail/${album.id}`);
    }

    async createAlbumData() {
      let { error } = this;
      const { albumName, user, createAlbum, getAlbumsData } = this;
      error = '';
      if (!albumName) {
        this.error = 'please enter an album name';
        return;
      }
      const newAlbum = {
        name: albumName,
        owner: user.username,
        ownerId: user.id,
      };
      await createAlbum(newAlbum);
    }
  }
</script>

<style scoped></style>

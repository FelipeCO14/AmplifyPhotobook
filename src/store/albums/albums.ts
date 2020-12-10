import { createAlbum as createAlbumMutation } from '@/graphql/mutations';
import { createPhoto as createPhotoMutation } from '@/graphql/mutations';
import { getAlbum as getAlbumQuery, listAlbums } from '@/graphql/queries';
import { listAlbums as listAlbumsQuery } from '@/graphql/queries';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { uuid } from 'uuidv4';
import awsconfig from '@/aws-exports';

export const albumInfo = {
  namespaced: true,
  state: { error: null, albums: null },
  mutations: {
    setAlbums(state: any, payload: any) {
      state.albums = payload;
    },
  },
  actions: {
    async createAlbum({ dispatch }: any, newAlbum: any) {
      try {
        await API.graphql(
          graphqlOperation(createAlbumMutation, { input: newAlbum })
        );
        dispatch('getAlbumsData');
      } catch (error) {
        console.error('Create Album', error);
      }
    },
    async getAlbum({ commit }: any, albumId: number) {
      return await API.graphql(
        graphqlOperation(getAlbumQuery, { id: albumId })
      );
    },
    async getAlbumsData({ commit }: any) {
      const albumsData: any = await API.graphql(
        graphqlOperation(listAlbumsQuery)
      );
      commit('setAlbums', albumsData.data.listAlbums.items);
    },
    async createPhoto(_: any, data: any) {
      const {
        aws_user_files_s3_bucket_region: region,
        aws_user_files_s3_bucket: bucket,
      } = awsconfig;
      const { file, type: mimeType, id } = data;
      const extension = file.name.substr(file.name.lastIndexOf('.') + 1);
      const photoId = uuid();
      const key = `images/${photoId}.${extension}`;
      const inputData = {
        id: photoId,
        photoAlbumId: id,
        contenttype: mimeType,
        fullsize: {
          key,
          region,
          bucket,
        },
      };

      //storage file on s3 bucket
      try {
        await Storage.put(key, file, {
          level: 'protected',
          contentType: mimeType,
          metadata: { albumId: id, photoId: photoId },
        });
        await API.graphql(
          graphqlOperation(createPhotoMutation, { input: inputData })
        );
        return Promise.resolve('Sucess');
      } catch (error) {
        console.error('Create Photo', error);
        Promise.reject(error);
      }
    },
  },
  getters: {
    albums: (state: any) => state.albums,
  },
};

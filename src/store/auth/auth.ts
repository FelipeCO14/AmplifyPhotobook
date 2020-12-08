import { Auth } from 'aws-amplify';

interface UserAuth {
  username: string;
  password: string;
  code: string;
}

interface UserSignup {
  username: string;
  password: string;
  email: string;
}
interface UserConfirmSignup {
  username: string;
  code: string;
}

export const auth = {
  namespaced: true,
  state: { user: null },
  mutations: {
    setUser(state: any, payload: any) {
      state.user = payload;
    },
  },
  actions: {
    async logout({ commit }: any) {
      await commit('setUser', null);
      return await Auth.signOut();
    },
    async login({ commit }: any, { username, password }: UserAuth) {
      try {
        await Auth.signIn({ username, password });

        const userInfo = await Auth.currentUserInfo();
        commit('setUser', userInfo);

        return Promise.resolve('Success');
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    },
    async confirmSignUp(_: any, { username, code }: UserConfirmSignup) {
      try {
        await Auth.confirmSignUp(username, code);
        return Promise.resolve('sucess');
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    },
    async signup(_: any, { username, password, email }: UserSignup) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        return Promise.resolve('Sucess');
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    },
    async authAction({ commit }: any) {
      const userInfo = await Auth.currentUserInfo();
      commit('setUser', userInfo);
    },
  },
  getters: {
    user: (state: any) => state.user,
  },
};

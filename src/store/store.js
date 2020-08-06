import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    email: "",
    password: "",
  },
  getters: {
    login(state) {
      return state.token !== null;
    },
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
  },
  actions: {
    retrieveToken(state,context) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://beta.mailbutler.io/api/v2/users/login", 
            state.email,
            state.password,
          )
          .then((response) => {
            const token = response.data.token;
            localStorage.setItem("token", token);
            context.commit("retrieveToken", token);
            resolve(response);
            // console.log(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
		},
		
  },
});

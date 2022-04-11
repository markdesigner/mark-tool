/* eslint-disable */ 

import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update, child} from "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    userInfo:null,
  },
  mutations: {
    setAuthenticated(state, value){
      state.isAuthenticated = value
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    }
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    setFirebaseInstance({ commit }) {
      const config = {
        apiKey: "AIzaSyDqahjEBHaPvRFzTZo7SGzribfG9GKErnc",
        authDomain: "marktool.firebaseapp.com",
        projectId: "marktool",
        storageBucket: "marktool.appspot.com",
        messagingSenderId: "732878553685",
        appId: "1:732878553685:web:bbe412b8ac6afef808cadc"
      }
      const firebaseInstance = firebase.initializeApp(config)
      console.log(firebaseInstance,'firebaseInstance')
      // commit('setFirebaseInstance', firebaseInstance)
    },
    setFacebookAuth({ commit }){
      const provider = new FacebookAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = provider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = provider.credentialFromError(error);

          // ...
        });
    },
    registerEmailAuth({ commit }) {

    },
    async loginByEmail({ commit }, { email, password }) {
      console.log(email,password)
      return await signInWithEmailAndPassword(getAuth(), email, password)
      .then(async (userCredential) => {
        console.log(userCredential, '使用者資料')
        const user = userCredential.user;
        commit('setUserInfo', user);
        commit('setAuthenticated', true);
        localStorage.setItem('uid', JSON.stringify(user.uid))
        return Promise.resolve()
      })
      .catch(() => {
        return Promise.reject()
      });
    },
    async logoutByEmail({ commit, dispatch }) {
      return await signOut(getAuth())
      .then(() => {
        console.log('成功登出')
        dispatch('resetAuthInfo')
        this.router.push({})
      })
      .catch((err)=>{
        console.log(err,'登出錯誤')
      })
    },
    resetAuthInfo({ commit }){
      commit('setAuthenticated', false);
      commit('setUserInfo', null);
      localStorage.removeItem('uid')
    }
  },
  modules: {},
});

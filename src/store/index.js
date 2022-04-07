/* eslint-disable */ 

import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update, child} from "firebase/database";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
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
    }
  },
  modules: {},
});

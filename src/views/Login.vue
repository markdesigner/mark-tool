<template>
  <div class="Login">
    <h1>Test</h1>
    <div class="authInput_container">
      <div class="inputItem">
        <input type="text" v-model="authInfo.email" placeholder="電子信箱" />
      </div>
      <div class="inputItem">
        <input type="password" v-model="authInfo.password" placeholder="密碼" />
      </div>
    </div>
    <button @click="handleEmailLogin">login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      authInfo: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    ...mapActions({
      loginByEmail: "loginByEmail",
      logoutByEmail: "logoutByEmail",
    }),
    async handleEmailLogin() {
      console.log(this.authInfo.email, "this.authInfo.email");
      try {
        await this.loginByEmail({
          email: this.authInfo.email,
          password: this.authInfo.password,
        });
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error, "error");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

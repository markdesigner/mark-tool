<template>
  <div class="Login">
    <h1>Test</h1>
    <button @click="handleLogin">login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleLogin() {
      this.$store.commit("setAuthenticated", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>

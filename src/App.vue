<template>
  <div id="app">
    <AppHeader :headerList="headerList" />
    <div class="appContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import HEADERLIST from "@/constants/headerList";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      headerList: HEADERLIST,
    };
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap);
* {
  font-family: "Noto Sans TC", sans-serif !important;
  font-weight: 500;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div class="appHeader">
    <div class="container">
      <div
        class="headerItem"
        :class="{
          active: headerItem.routeName === activeRouteName,
          headerItem,
        }"
        v-for="(headerItem, headerIndex) in headerList"
        :key="headerIndex"
      >
        <div
          class="item"
          @click="handleClickHeaderItem(headerItem, headerIndex)"
        >
          {{ headerItem.text }}
        </div>
      </div>
      <div class="config_container">
        <button @click="handleEmailLogout">logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  props: {
    headerList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      routeActiveIndex: 0,
    };
  },
  computed: {
    activeRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions({
      loginByEmail: "loginByEmail",
      logoutByEmail: "logoutByEmail",
    }),
    handleClickHeaderItem(headerItem, headerIndex) {
      this.routeActiveIndex = headerIndex;
      if (headerItem.routeName) {
        if (this.$router.currentRoute.name !== headerItem.routeName) {
          this.$router.push({ name: headerItem.routeName });
        }
      }
    },
    async handleEmailLogout() {
      try {
        await this.logoutByEmail();
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.appHeader {
  margin-bottom: 20px;
  .container {
    height: 60px;
    display: flex;
    background-color: #ffffff;
    border-bottom: solid 1px #f1f1f1;
    align-items: center;
    .headerItem {
      flex-basis: 50px;
      cursor: pointer;
      &.active {
        color: #1d80ff;
      }
      .item {
        margin: 0 20px;
      }
    }
    .config_container {
      margin-left: auto;
    }
  }
}
</style>

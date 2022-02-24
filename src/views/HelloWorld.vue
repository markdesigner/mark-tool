<template>
  <div class="hello">
    <div
      class="container"
      v-for="(item, index) in objectDateArray"
      :key="index"
    >
      <div
        class="subContainer"
        v-for="(subItem, subIndex) in item"
        :key="subIndex"
      >
        <div class="item" @click="handle(subItem)">{{ subItem.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      objectDateArray: [
        [{ name: true }, { name: true }],
        [{ name: true }, { name: true }],
      ],
    };
  },
  methods: {
    handle() {
      console.log(this);
      this.$set(this.objectDateArray[0][0], "name", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

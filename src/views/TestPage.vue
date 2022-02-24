<template>
  <div class="TestPage">
    <img :src="generateMjpg()" />
    <!-- <div class="image-container"></div> -->
  </div>
</template>

<script>
export default {
  name: "CopyTool",
  data() {
    return {};
  },
  watch: {},
  methods: {
    generateMjpg() {
      let mjpg = new Image();
      mjpg.src = "/camera/video2.mjpg";
      mjpg.onload = () => {
        document.querySelector(".TestPage").append(mjpg);
      };
    },
  },
  mounted() {
    this.generateMjpg();
  },
  computed: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CopyTool {
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  &__container {
  }
  &__input {
  }
  &__textBlock {
    width: 100%;
    height: 400px;
  }
}
</style>

<template>
  <div class="chatTogether"></div>
</template>

<script>
export default {
  name: "CopyTool",
  data() {
    return {};
  },
  watch: {},
  methods: {
    getMediaAuth() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          console.log(stream);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    },
  },
  computed: {},
  components: {},
  mounted(){
    this.getMediaAuth();
  }
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
<template>
  <div class="TestPage">
    <div class="tool">
      <h1 class="title">Rem換算</h1>
      <input type="text" v-model="rem" @input="handleInputChange" />
      <div class="answer">{{ rem * 16 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  components: {},
  data() {
    return {
      rem: 1,
    };
  },
  methods: {
    handleInputChange() {
      this.rem = this.rem.replace(/[^0-9.]/g, "");
    },
  },
};
</script>

<style lang="scss" scoped>
.tool {
  display: flex;
  align-items: center;
  gap: 0 20px;
  input {
    font-size: 20px;
    width: 150px;
  }
  .answer {
    font-size: 30px;
  }
}
</style>

<template>
  <div class="home">
    <img class="copy__icon" alt="Vue logo" src="@/assets/clipboard.svg" />

    <div class="copy__container">
      <div class="copy__item" v-for="(item, index) in copyList" :key="index">
        <input
          type="text"
          class="copy__text copy__text--tip"
          v-model="item.tip"
          placeholder="Item Name"
        />
        <input
          class="copy__text copy__text--value"
          type="text"
          v-model="item.value"
          placeholder="copy words"
        />
        <button
          v-clipboard:copy="item.value"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
        >
          copy
        </button>
        <button @click="handleDelete(index)">delete</button>
      </div>
    </div>
    <div class="copy__handleContainer">
      <button @click="handleAdd">add</button>
      <button @click="handleSave">save</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      copyList: [{ value: "", tip: "" }],
    };
  },
  methods: {
    handleAdd() {
      this.copyList.push({ value: "", tip: "" });
    },
    copySuccess() {},
    copyError() {
      alert("copy Error");
    },
    handleSave() {
      const stringifyData = JSON.stringify(this.copyList);
      localStorage.setItem("copyList", stringifyData);
    },
    handleRestore() {
      const rawData = localStorage.getItem("copyList");
      if (rawData) {
        try {
          const copyList = JSON.parse(rawData);
          this.copyList = copyList;
        } catch {
          localStorage.removeItem("copyList");
        }
      }
    },
    handleDelete(index) {
      this.copyList.splice(index, 1);
    },
  },
  mounted() {
    this.handleRestore();
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.copy {
  &__item {
    height: 50px;
  }
  &__icon {
    width: 10%;
  }
  &__text {
    margin-top: 10px;
    margin-right: 10px;
    border: none;
    background-color: rgb(190, 237, 222);
    outline: none;
    font-size: 18px;
    color: #000;
    padding: 10px;
    &--tip {
      width: 10%;
    }
    &--value {
      width: 50%;
    }
  }
  &__handleContainer{
    margin-top: 30px;
  }
}
</style>

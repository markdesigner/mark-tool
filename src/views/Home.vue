<template>
  <div class="home">
    <img class="copy__icon" alt="Vue logo" src="@/assets/clipboard.svg" />
    <div class="copy__container">
      <div class="copy__form copy__item">
        <input
          type="text"
          class="copy__text copy__text--tip"
          v-model="copyForm.tip"
          placeholder="給個標題"
          @blur="handleSave"
        />
        <input
          class="copy__text copy__text--value"
          type="text"
          v-model="copyForm.value"
          placeholder="要複製的文字"
          @blur="handleSave"
          @keyup.enter="addItem"
        />
        <div class="button__group">
          <button @click="addItem">確認</button>
        </div>
      </div>
      <div class="copy__item" v-for="(item, index) in copyList" :key="index">
        <input
          type="text"
          class="copy__text copy__text--tip"
          v-model="item.tip"
          placeholder="給個標題"
          @blur="handleSave"
        />
        <input
          class="copy__text copy__text--value"
          type="text"
          v-model="item.value"
          placeholder="要複製的文字"
          @blur="handleSave"
        />
        <div class="button__group">
          <button
            v-clipboard:copy="item.value"
            v-clipboard:success="copySuccess"
            v-clipboard:error="copyError"
          >
            複製
          </button>
          <button @click="handleDelete(index)">刪除此列</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      copyList: [],
      copyForm: {
        value: "",
        tip: "",
      },
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
      this.handleSave();
    },
    addItem() {
      this.copyList.push(this.copyForm);
      this.copyForm = {
        value: "",
        tip: "",
      };
      this.handleSave();
    },
  },
  mounted() {
    this.handleRestore();
  },
  components: {},
};
</script>
<style lang="scss" scoped>
button {
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 12px;
  margin: 4px;
}
.copy {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .button__group {
      flex-basis: 20%;
      text-align: left;
    }
  }
  &__icon {
    width: 10%;
  }
  &__container {
    margin: 10px auto 0px;
    width: 80%;
  }
  &__form {
    .copy__text {
      background-color: #ffdda4;
    }
  }
  &__text {
    margin-right: 10px;
    border-radius: 12px;
    border: none;
    background-color: rgb(190, 237, 222);
    outline: none;
    font-size: 18px;
    color: #000;
    padding: 10px;
    &--tip {
      // width: 10%;
      flex-basis: 10%;
    }
    &--value {
      flex-basis: 70%;
    }
  }
  &__handleContainer {
    margin-top: 30px;
  }
}
</style>

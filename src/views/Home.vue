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
        />
        <input
          class="copy__text copy__text--value"
          type="text"
          v-model="copyForm.value"
          placeholder="要複製的文字"
          @keyup.enter="addItem"
        />
        <div class="button__group">
          <button @click="addItem">確認</button>
        </div>
      </div>
      <draggable v-model="copyList" handle=".handle" v-bind="dragOptions">
        <transition-group type="transition" name="flip-list">
          <div
            class="copy__item"
            v-for="(item, index) in copyList"
            :key="item.value"
          >
            <input
              type="text"
              class="copy__text copy__text--tip"
              v-model="item.tip"
              placeholder="給個標題"
            />
            <input
              class="copy__text copy__text--value"
              type="text"
              v-model="item.value"
              placeholder="要複製的文字"
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
              <button class="handle">
                <img class="icon" src="@/assets/icon/menu.svg" />
              </button>
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import draggable from "vuedraggable";
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
  watch: {
    copyList: {
      handler() {
        this.handleSave();
      },
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 10,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
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
    addItem() {
      this.copyList.unshift(this.copyForm);
      this.copyForm = {
        value: "",
        tip: "",
      };
    },
  },
  mounted() {
    this.handleRestore();
  },
  components: {
    draggable,
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap");
button {
  border: none;
  width: 80px;
  height: 40px;
  border-radius: 12px;
  margin: 4px;
  cursor: pointer;
  background-color: #beedde;
  font-size: 14px;
  &:active {
    background-color: #5c8e7e;
  }
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
.drag {
  &__item {
    background-color: #ffdda4;
    margin-bottom: 20px;
  }
}
.icon {
  width: 20%;
}
.ghost {
  opacity: 0.5;
  background: #d2e5df;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>

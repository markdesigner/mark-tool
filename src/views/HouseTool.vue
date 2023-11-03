<template>
  <div class="HouseTool">
    <div class="search-container">
      <input v-model="answer" type="text" placeholder="建商名聲 or 建案全名" />
    </div>
    <div class="answer-container">
      <span>寶咖咖嗎？</span>
      <div v-if="isBao" class="answer-text warning">是</div>
      <div v-else class="answer-text">否</div>
    </div>
  </div>
</template>

<script>
import baoList from "@/constants/baoList";

export default {
  name: "HouseTool",
  components: {},
  data() {
    return {
      answer: "順天建設",
    };
  },
  computed: {
    isBao() {
      return this.checkIsBao();
    },
  },
  methods: {
    checkIsBao() {
      let result = false;
      const answerCompanyName = this.answer.substr(0, 2);
      baoList.forEach((company) => {
        if (company.includes(answerCompanyName)) {
          result = true;
        }
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.HouseTool {
  .answer-container {
    .answer-text {
      width: 200px;
      height: 200px;
      font-size: 100px;
      margin: auto;
      color: white;
      line-height: 180px;
      border-radius: 10%;
      background-color: green;
      &.warning {
        background-color: orange;
      }
    }
  }
}
</style>

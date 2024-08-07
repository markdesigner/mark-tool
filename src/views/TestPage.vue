<template>
  <div class="TestPage">
    <div class="tool">
      <h1 class="title">打卡記錄</h1>
      <div class="onboard-time" v-if="enterOfficeDate">{{ convertRenderDate(enterOfficeDate) }} {{  convertRenderTimeToSeconds(enterOfficeDate) }}</div>
      <button @click="onBoard">打卡</button>
    </div>
    <div class="tool">
      <h1 class="title">Rem換算</h1>
      <input type="text" v-model="rem" @input="handleInputChange" />
      <div class="answer">{{ rem * 16 }}</div>
    </div>

    <div class="tool">
      <h1 class="title">CoCo換算</h1>
      <input type="number" step="0.1" v-model="monthSalary"/>
      <div class="answer">{{ monthSalary * 17.5 }} 萬</div>
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
      monthSalary: 7.2,
      enterOfficeDate: null
    };
  },
  methods: {
    handleInputChange() {
      this.rem = this.rem.replace(/[^0-9.]/g, "");
    },
    handleOfficeDateChange() {
      localStorage.setItem('onBoardTime', this.enterOfficeDate.getTime());
    },
    onBoard() {
      this.enterOfficeDate = new Date();
      this.handleOfficeDateChange();
    },
    convertRenderDate(date){
      return `${date.getFullYear()}-${`00${date.getMonth() + 1}`.substr(
        -2
      )}-${`00${date.getDate()}`.substr(-2)}`;
    },
    convertRenderTimeToSeconds(date){
      return `${`00${date.getHours()}`.substr(-2)}:${`00${date.getMinutes()}`.substr(-2)}:${`00${date.getSeconds()}`.substr(-2)}`;
    },
  },
  created() {
    const onBoardTime = localStorage.getItem('onBoardTime')
    console.log(onBoardTime,'onBoardTime')
    if(onBoardTime) {

      this.enterOfficeDate = new Date(Number(onBoardTime));
      console.log(this.enterOfficeDate)
    }
  }
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

<template>
  <div class="CopyTool">
    <div class="CopyTool__container">
      <input
        class="CopyTool__input CopyTool__input--guestName"
        v-model="guestName"
        type="text"
        placeholder="人名"
      />
      <input
        class="CopyTool__input CopyTool__input--bookingDate"
        v-model="bookingDate"
        type="date"
        placeholder="日期"
        @change="setWeekDay"
      />
      <input
        class="CopyTool__input CopyTool__input--bookingTime"
        v-model="isCustomizeTime"
        type="checkbox"
      />是否為客製化時間
      <div class="customizeTime-container">
        <input
          class="CopyTool__input CopyTool__input--bookingTime"
          v-model="bookingStartTime"
          type="time"
          placeholder="開始時間"
        />
        <input
          class="CopyTool__input CopyTool__input--bookingTime"
          v-model="bookingEndTime"
          type="time"
          placeholder="結束時間"
        />
      </div>
      <div class="periodSelect-container">
        <select v-model="period">
          <option value="whole">整天</option>
          <option value="morning">上午場</option>
          <option value="evening">下午場</option>
        </select>
      </div>
      <input
        class="CopyTool__input CopyTool__input--lockPassword"
        v-model="lockPassword"
        type="text"
        placeholder="電子鎖密碼"
      />
      <span
        >{{ guestName }} {{ bookingDate }} {{ bookingStartTime }}
        {{ bookingEndTime }} {{ lockPassword }}</span
      >
      <textarea class="CopyTool__textBlock" v-model="dialogue"></textarea>
    </div>
    <div class="CopyTool__ProduceButton">
      <button @click="handleProduceText">一鍵生成</button>
    </div>
    <div class="CopyTool__CopyButton">
      <button
        v-clipboard:copy="dialogue"
        v-clipboard:success="handleCopySuccess"
      >
        一鍵複製
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyTool",
  data() {
    return {
      guestName: "",
      bookingDate: ``,
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDay: "",
      lockPassword: "",
      dialogue: "",
      isCustomizeTime: false,
      period: "whole",
    };
  },
  watch: {
    period: {
      handler() {
        this.setBookingTime();
      },
      immediate: true,
    },
  },
  methods: {
    setBookingTime() {
      if (this.period === "whole") {
        if (this.bookingDay === "週六" || this.bookingDay === "週日") {
          this.bookingStartTime = "12:00";
          this.bookingEndTime = "21:00";
        } else {
          this.bookingStartTime = "09:00";
          this.bookingEndTime = "21:00";
        }
      } else if (this.period === "morning") {
        this.bookingStartTime = "09:00";
        this.bookingEndTime = "14:00";
      } else {
        this.bookingStartTime = "15:00";
        this.bookingEndTime = "21:00";
      }
    },
    setWeekDay() {
      this.bookingDay = this.generateWeekDay(this.bookingDate);
      this.setBookingTime();
    },
    handleProduceText() {
      let textResult = `感謝${this.guestName ? "坐友" : ""}${
        this.guestName
      }預約～
我們：${this.bookingDate} ${this.bookingDay} 有來坐預約，採自助式入場

到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。
前來時您的密碼為「${this.lockPassword}#」要記得加#唷！
密碼時效為${this.bookingDay} ${this.bookingStartTime} - ${
        this.bookingEndTime
      }，中途都可自行進出

疫情期間比較不一樣的是我們會在門口放上感應式溫度計及酒精，入場時幫我們掃個QR碼後，量個溫度+手部消毒後再入場

我們的wifi是：
名稱：comesit
密碼：comesitspace


冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供）。
另外為保持場地品質來坐一律不能吸菸、喝酒、開伙和砸派呦。
離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內！

停車資訊：
騎機車的朋友們可以直接停來坐門口空位處，開車的朋友可停附近貴和停車場
（https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)

若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！
祝您有個愉快的一天❤️
`;
      this.dialogue = textResult;
    },
    handleCopySuccess() {
      alert("複製成功");
    },
    generateWeekDay(datetime) {
      const date = new Date(datetime);
      const day = date.getDay();
      return this.mappingDayToChineseDay(day);
    },
    mappingDayToChineseDay(day) {
      const mappingDict = [
        "週日",
        "週一",
        "週二",
        "週三",
        "週四",
        "週五",
        "週六",
      ];
      return mappingDict[day];
    },
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

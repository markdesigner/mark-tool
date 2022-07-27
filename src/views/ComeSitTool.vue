<template>
  <div class="CopyTool">
    <div class="container">
      <div class="input__item textInput">
        <div class="textInput__item">
          <input
            class="CopyTool__input CopyTool__input--guestName"
            v-model="guestName"
            type="text"
            placeholder="人名"
          />
        </div>
        <div class="textInput__item">
          <input
            class="CopyTool__input CopyTool__input--lockPassword"
            v-model="lockPassword"
            type="text"
            placeholder="電子鎖密碼"
          />
        </div>
        <div class="periodSelect-container">
          <select v-model="period">
            <option value="whole">整天</option>
            <option value="morning">上午場</option>
            <option value="evening">下午場</option>
          </select>
        </div>
      </div>
      <div class="input__item">
        <v-date-picker v-model="bookingDate" />
      </div>
      <div class="input__item">
        <v-date-picker
          v-model="bookingTime"
          mode="time"
          isRange
          is24hr
          :validHours="validHoursRange"
          :minute-increment="60"
        />
      </div>
      <!-- <span
        >{{ guestName }} {{ bookingStartTime }}
        {{ bookingEndTime }} {{ lockPassword }}</span
      > -->
    </div>
    <textarea class="CopyTool__textBlock" v-model="dialogue"></textarea>

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
import dayJs from "dayjs";
import "dayjs/locale/zh-tw";
export default {
  name: "CopyTool",
  data() {
    return {
      guestName: "",
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: new Date(),
      bookingTime: {
        start: dayJs(new Date()).format("YYYY-MM-DDT12:00:00"),
        end: dayJs(new Date()).format("YYYY-MM-DDT21:00:00"),
      },
      lockPassword: "",
      dialogue: "",
      isCustomizeTime: false,
      period: "whole",
      days: [],
    };
  },
  created() {
    dayJs.locale("zh-tw");
    global.vuecp = this;
  },
  watch: {
    bookingDate(bookingDate) {
      this.bookingTime = {
        start: dayJs(bookingDate).format("YYYY-MM-DDT12:00:00"),
        end: dayJs(bookingDate).format("YYYY-MM-DDT21:00:00"),
      };
    },
  },
  methods: {
    onDayClick(day) {
      console.log("onDayClick", day);
    },
    setBookingTime() {
      if (this.period === "whole") {
        if (
          dayJs(this.bookingDate).format("d") === "6" ||
          this.bookingDay === "0"
        ) {
          this.bookingTime.start = dayJs(
            dayJs(this.bookingDate).format("YYYY-MM-DDT12:00:00")
          ).toDate();
          this.bookingTime.end = dayJs(
            dayJs(this.bookingDate).format("YYYY-MM-DDT21:00:00")
          ).toDate();
          console.log("設定中");
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
    handleProduceText() {
      let textResult = `這邊先給您入場資訊與密碼呦～

感謝${this.guestName ? "坐友" : ""}${this.guestName}預約～
我們：${this.arrangeBookingDate} 有來坐預約，採自助式入場

到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。
前來時您的密碼為「${this.lockPassword}#」要記得加#唷！
密碼時效為 ${this.arrangeStartTime} - ${this.arrangeEndTime}，中途都可自行進出

疫情期間我們有在門口放上感應式溫度計及酒精，入場時幫我們量個溫度+手部消毒後再入場

我們的wifi是：
名稱：comesit
密碼：comesitspace

這邊也提供設備的使用教學👉

投影機使用教學：https://youtu.be/jmIlVMdkUKU
藍芽音響使用教學：https://youtu.be/OhyRXlig23s

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
  },
  computed: {
    arrangeBookingDate() {
      return dayJs(this.bookingDate).format("YYYY/MM/DD dddd");
    },
    arrangeStartTime() {
      return dayJs(this.bookingTime.start).format("HH:mm");
    },
    arrangeEndTime() {
      return dayJs(this.bookingTime.end).format("HH:mm");
    },
    validHoursRange() {
      if (this.bookingDate.getDay() !== 6 && this.bookingDate.getDay() !== 0) {
        return {
          min: 9,
          max: 21,
        };
      }
      return {
        min: 12,
        max: 21,
      };
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CopyTool {
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  .container {
    display: flex;
    justify-content: center;
    .input__item {
    }
  }

  &__textBlock {
    width: 100%;
    height: 400px;
  }
}
</style>

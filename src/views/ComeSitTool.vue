<template>
  <div class="CopyTool">
    <div class="booking-container">
      <div class="people">
        人數：<input type="number" v-model="peopleNumber" placeholder="人數">
      </div>
      <textarea class="copyArea" v-model="bookingText"></textarea>
      <div class="CopyTool__ProduceButton">
        <button @click="handleGenerateAndCopyBooking">一鍵生成與複製</button>
      </div>
    </div>
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
            <option value="whole">整天場選擇</option>
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
      <button @click="handleGenerateAndCopy">一鍵生成與複製</button>
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
      peopleNumber: 5,
      bookingText: ''
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
    handleGenerateAndCopy() {
      this.handleProduceText();
      this.copy();
    },
    handleGenerateAndCopyBooking() {
      this.handleBookingText();
      this.copyBookingText();
    },
    handleBookingText() {
      this.bookingText =`已經幫您預約囉，那再麻煩三日內幫我匯款${this.peopleNumber * 250}元到以下戶頭後，或是Line 加入來坐好友Line Pay(一卡通money)轉帳給我(https://line.me/ti/p/Cjwh2O1BL6)。
完成後我會傳送入場資訊與密碼給您。非常感謝

銀行代號 007 （第一銀行）
帳號40157027386`
    },
    async copyBookingText() {
      await this.$copyText(this.bookingText).catch(() => {
        throw new Error("copy error");
      });
    },
    async copy() {
      await this.$copyText(this.dialogue).catch(() => {
        throw new Error("copy error");
      });
    },
    handleProduceText() {
      let textResult = `🪑感謝預約，這邊先給您入場資訊與密碼呦~

我們：${this.arrangeBookingDate} 有來坐預約，採自助式入場

🪑入場教學：

  到時紅色大門有個密碼鎖，保護客人使用空間不會有外人入場。

  前來時您的密碼為「${this.lockPassword}#」要記得加#唷！

  密碼時效為 ${this.arrangeStartTime} - ${this.arrangeEndTime}，中途都可自行進出

🪑我們的WiFi：

  名稱：comesit
  密碼：comesitspace

🪑這邊也提供設備的使用教學

📌投影機使用教學：https://youtu.be/s1NzaJ8Ewsg

📌手機用音響播放音樂教學: https://youtu.be/CiyMo7gzvLQ

📌飛鏢機使用教學：https://youtu.be/qDS5eHW8qmE

📌投影機沒有聲音如何解決： https://youtu.be/o93hvL1qZ2o

🪑入場須知：

  冷氣和燈光都可以自行開關調整，最後離場時再幫我們都關掉就好。冰箱也可以使用（但冰箱裡的東西沒有提供😊）。

  入場後樓下有來坐專屬鞋櫃，再幫我們直接穿鞋走樓梯下樓即可呦～

  另外為保持場地品質，來坐一律不能吸菸、喝酒、開伙和砸派呦。

  離場前再麻煩幫忙把使用的垃圾、回收分類在桶子內。

  使用過的餐具也幫我們集中到白色餐車上。

🪑停車資訊：

  騎機車的朋友們可以直接停來坐招牌前方與正門口，並請勿鎖龍頭。

  開車的朋友可停附近貴和停車場(無特約)、和周邊停車格呦!
  （https://goo.gl/maps/N3zEHZVsP1JsHGNQ7)

🪑若到現場有任何狀況或問題，都歡迎隨時在這告知我們，我們會立馬回覆處理唷！
祝您有個愉快的一天❤️
`;
      this.dialogue = textResult;
    },
    handleCopyError() {
      alert("複製失敗");
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
      return {
        min: 8,
        max: 23,
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
  .booking-container {
    margin: 50px;
    .copyArea {
      margin: 20px 0;
      width: 600px;
    }
  }
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

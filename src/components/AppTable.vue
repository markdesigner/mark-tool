<template>
  <div class="AppTable">
    <table>
      <thead>
        <slot name="thead" :number="headData.length" :items="headData">
          <tr>
            <th v-for="(headItem, index) in headData" :key="index">
              {{ headItem }}
            </th>
          </tr>
        </slot>
      </thead>
    </table>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AppTable",
  props: {
    headData: {
      type: Array,
      required: false,
      default: () => 9,
    },
  },
  methods: {
    generateUUID() {
      return uuidv4();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: solid 1px #eee;
    }
  }
}
</style>

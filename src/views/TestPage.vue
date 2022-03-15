<template>
  <div class="TestPage">
    <h1>Test</h1>
    <AppTable :headData="headData">
      <template v-slot:thead="prop">
        {{ prop.items }}
        <div>
          {{ prop.number }}
        </div>
      </template>
    </AppTable>
  </div>
</template>

<script>
import AppTable from "@/components/AppTable";
export default {
  name: "TestPage",
  components: {
    AppTable,
  },
  data() {
    return {
      headData: ["name", "age", "gender"],
    };
  },
};
</script>

<style lang="scss" scoped></style>

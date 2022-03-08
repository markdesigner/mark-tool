<template>
  <div class="componentTemplate"></div>
</template>

<script>
export default {
  name: "componentTemplate",
  props: {
    msg: {
      type: String,
      required: false,
      default: () => 9,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

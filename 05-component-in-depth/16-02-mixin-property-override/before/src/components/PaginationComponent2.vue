<template>
  <div>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p>当前页：{{ currentPage }}</p>
  </div>
  <p v-if="showTotal">總計 : {{ totalPage }}</p>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
  props: ["showTotal"],
  data() {
    return {
      currentPage: 1,
    };
  },
  mounted() {
    console.log("執行2");
  },
};
</script>
<style scoped>
div {
  padding: 24px 0;
}

p {
  margin-top: 12px;
}

a {
  color: hsl(280deg, 100%, 80%);
  width: 24px;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
</style>

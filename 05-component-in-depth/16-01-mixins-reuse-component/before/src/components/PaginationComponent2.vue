<template>
  <div>
    <p>当前页：{{ currentPage }}</p>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";
export default {
  mixins: [PaginationMixin],
};
</script>
<style scoped></style>

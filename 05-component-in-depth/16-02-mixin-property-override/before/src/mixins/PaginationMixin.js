const PaginationMixin = {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    console.log("執行mixin中的mounted");
  },
};

export default PaginationMixin;

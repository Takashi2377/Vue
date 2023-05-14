// 示例：方法和监听器的区别
const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入门实战",
        "Vue 3.x 完全指南",
        "React 18 新特性介绍",
        "JavaScript 基础语法概览",
      ],
      newBlog: "",
    };
  },
  methods: {
    addNewBlog() {
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
        this.count += 1;
      }, 2000);
    },
    click() {
      this.newBlog = "野格a配方";
    },
  },
  watch: {
    newBlog(newVal) {
      this.addNewBlog();
    },
  },
});
app.mount("#app");

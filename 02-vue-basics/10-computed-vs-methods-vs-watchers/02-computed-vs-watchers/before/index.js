// 示例：计算属性和监听器的区别
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
  computed: {
    count() {
      return this.blogPosts.length;
    },
  },
  watch: {
    blogPosts: {
      handler(newVal) {
        this.count = newVal.length;
      },
      deep: true,
    },
    newBlog(newVal) {
      setTimeout(() => {
        this.blogPosts.push(newVal);
      }, 2000);
    },
  },
});
app.mount("#app");

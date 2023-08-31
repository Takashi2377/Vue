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
  //將data中的資料做計算&包裝，通常不會真的修改資料
  computed: {
    count() {
      return this.blogPosts.length;
    },
  },
  //根據監聽到的屬性變化，修改&更新data中的值
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

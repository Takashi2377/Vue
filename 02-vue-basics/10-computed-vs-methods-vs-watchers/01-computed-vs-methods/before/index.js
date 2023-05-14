// 示例：计算属性和方法的区别
const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入门实战",
        "Vue 3.x 完全指南",
        "React 18 新特性介绍",
        "JavaScript 基础语法概览",
      ],
      counter: 0,
    };
  },
  computed: {
    vueBlogs() {
      console.log("調用計算屬性函數");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
  },
  methods: {
    getVueBlogs(count) {
      console.log("方法");
      return this.blogPosts
        .filter((blog) => blog.includes("Vue"))
        .slice(0, count);
    },
  },
});
app.mount("#app");

//computed 會緩存結果
/*methods 不會緩存結果，html中的其他屬性發生變化時，
methods都會重新執行，較耗費效能*/

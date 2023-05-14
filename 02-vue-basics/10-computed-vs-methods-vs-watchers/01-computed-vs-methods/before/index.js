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
    };
  },
});
app.mount("#app");

//computed 會緩存結果
//methods 不會緩存結果，每次使用都會重新調用，較耗費效能

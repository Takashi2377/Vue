// 示例：展示列表数据
const app = Vue.createApp({
  data() {
    return {
      todos: [
        { content: "把项目做完", complete: true },
        { content: "去超市购物", complete: false },
        { content: "看10分钟的书", complete: false },
      ],
    };
  },
});
app.mount("#app");

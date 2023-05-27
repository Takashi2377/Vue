// 示例：事件相关的修饰符
const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    handleULClick() {
      alert(0);
    },
    handleLIClick() {
      alert(1);
    },
  },
});
app.mount("#app");

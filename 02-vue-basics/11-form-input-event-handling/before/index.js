// 示例：表单输入控件事件处理
const app = Vue.createApp({
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    inputHandler(e) {
      this.userName = e.target.value;
    },
  },
});
app.mount("#app");

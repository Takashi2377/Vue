// 示例：在 inline-style 内联样式中绑定 data 数据
const app = Vue.createApp({
  data() {
    return {
      fontSize: 16,
    };
  },
  computed: {
    pStyle() {
      return {
        color: "violet",
        fontSize: this.fontSize + "px",
      };
    },
  },
});
app.mount("#app");

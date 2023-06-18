import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// 定义自定义指令

app.directive("fSize", (el, binding) => {
  el.style.fontSize = binding.value + (binding.arg || "px");
});
app.mount("#app");

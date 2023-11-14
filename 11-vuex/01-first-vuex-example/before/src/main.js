import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      color: [100, 100, 100],
    };
  },
  mutations: {
    randomColor(state) {
      state.color = [
        Math.floor(Math.random() * 777),
        Math.floor(Math.random() * 777),
        Math.floor(Math.random() * 777),
      ];
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");

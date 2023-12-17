import "./assets/base.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./routes.js";
import { store } from "./store";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);

app.mount("#app");

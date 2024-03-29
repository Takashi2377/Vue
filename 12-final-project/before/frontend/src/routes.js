import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/search_result", name: "search_result", component: SearchPage },
  { path: "/profile", name: "profile", component: ProfilePage },
  {
    path: "/profile/edit",
    name: "profileEdit",
    component: ProfileEdittingPage,
  },
  { path: "/login", name: "login", component: LoginPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };

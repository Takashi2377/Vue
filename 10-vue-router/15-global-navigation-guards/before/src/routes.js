import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/blogs",
    component: BlogManagement,
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details",
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = true;

router.beforeEach((to, from) => {
  // console.log(to, from);
  if (to.path.startsWith("/blogs")) {
    if (!loggedIn) {
      return "/login";
    }
  }
});

router.beforeResolve((to, from) => {
  // console.log(to, from);
  if (to.path.startsWith("/blogs")) {
    console.log("用戶已登入");
  }
});

router.afterEach((to, from) => {
  document.title = to.path;
});

export default router;

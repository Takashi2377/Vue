// import BlogListPage from "./pages/BlogListPage.vue";
// import BlogPostPage from "./pages/BlogPostPage.vue";

const BlogListPage = () => import("./pages/BlogListPage.vue");
const BlogPostPage = () => import("./pages/BlogPostPage.vue");

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
  },
  {
    path: "/:postId",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

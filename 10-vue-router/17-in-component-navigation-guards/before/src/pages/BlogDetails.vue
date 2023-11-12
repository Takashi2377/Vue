<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.body }}</p>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";
export default {
  data() {
    return {
      blog: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      setTimeout(() => {
        vm.blog = getBlogPostById(to.params.postId);
      }, 1000);
    });
  },
  beforeRouteUpdate(to) {
    this.blog = {};
    setTimeout(() => {
      this.blog = getBlogPostById(to.params.postId);
    }, 1000);
  },
};
</script>
<style scoped>
article {
  padding: 48px;
}
</style>

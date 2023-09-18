// 示例：生命周期
const app = Vue.createApp({
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPost() {
      let res = await fetch("./posts.json");
      let postsData = await res.json();
      this.posts = postsData;
    },
  },
  created() {
    this.fetchPost();
  },
});
const vm = app.mount("#app");

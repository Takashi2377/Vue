// 示例：表单事件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        this.username,
        this.gender,
        this.occupation,
        this.interests,
        this.intro
      );
    },
  },
});
app.mount("#app");

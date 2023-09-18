// 示例：如何创建组件
const app = Vue.createApp({});

app.component("WordCount", {
  template: `<div>
  <input v-model="content"/>
  <p>一共輸入了 {{count}} 個字數</p>
  </div>`,
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
});

const vm = app.mount("#app");

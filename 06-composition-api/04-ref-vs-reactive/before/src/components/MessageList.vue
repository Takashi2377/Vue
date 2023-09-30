<template>
  <div>
    <h2>{{ options.title }}</h2>
    <!-- <p>
      用戶:{{ options.user.name }}, 活躍 {{ options.user.active ? "Y" : "N" }}
    </p> -->
    <ul>
      <h3>先發選手:</h3>
      <li v-for="name in options.user.names">{{ name }}</li>
      <h3>替補選手:</h3>
      <li>{{ options.user.substitute }}</li>
    </ul>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">删除全部</button>
    <button @click="options.title = '亞運大名單'">修改標題</button>
    <button @click="options.user.names.push('Faker')">修改姓名</button>
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    const options = reactive({
      title: "亞運冠軍名單",
      user: {
        names: ["Zeus", "Kanavi", "Chovy", "Ruler", "Keria"],
        substitute: "Faker",
      },
    });

    console.log(messages);

    return { messages, options };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
}

h2 {
  color: hsl(280deg, 50%, 70%);
}

p {
  margin: 12px 0 24px 0;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>

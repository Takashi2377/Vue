<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: { MessageItem },
};
</script>

<template>
  <main>
    <div>
      <MessageItem sender="Keria" msg="野格" time="12:12" />
      <MessageItem sender="Deft" msg="炸彈" time="12:13" />
      <MessageItem sender="Faker" msg="超爽口感" time="12:14" />
    </div>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

h1 {
  margin-bottom: 2em;
}
</style>

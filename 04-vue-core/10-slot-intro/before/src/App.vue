<template>
  <main>
    <div>
      <BaseCard title="卡片容器">
        <p>content</p>
        <p>template</p>
        <a href="#">超連結</a>
      </BaseCard>
    </div>
  </main>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
};
</script>

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

a {
  color: hsl(250deg, 100%, 90%);
}
</style>

<template>
  <main>
    <p v-if="error">頂級錯誤</p>
    <AppList :data="data" v-else />
  </main>
</template>

<script>
import AppList from "./components/AppList.vue";

export default {
  components: {
    AppList,
  },
  data() {
    return {
      data: [1, 2, 3],
      error: false,
    };
  },
  errorCaptured(err, instance, info) {
    this.error = true;
    return false;
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

ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
}
</style>

<template>
  <main>
    <div>
      str : <span>{{ str }}</span>
    </div>
    <div>
      nl : <span>{{ nl }}</span>
    </div>
    <div>
      bool : <span>{{ bool }}</span>
    </div>
    <div>
      arr : <span>{{ arr }}</span>
    </div>
    <p>{{ roger }}</p>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  // computed: mapState({
  //   num: (state) => state.nl,
  //   num: "nl",
  //   count: "nl",
  // }),
  computed: {
    ...mapState(["str", "nl", "bool", "arr"]),
    roger() {
      return "貝果乾";
    },
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

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin: 12px 0;
}

p > span {
  color: hsl(280deg, 100%, 80%);
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1.5em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
}
</style>

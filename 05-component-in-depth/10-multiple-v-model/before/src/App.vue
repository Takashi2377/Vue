<template>
  <main>
    <div>
      <SearchInput
        v-model:searchTerm="searchQuery"
        v-model:category="category"
      />
      <p>{{ searchQuery }}</p>
      <p>{{ category }}</p>
    </div>
  </main>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      searchQuery: "",
      category: "default",
    };
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

.splitLine {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed hsl(280deg, 50%, 50%);
}

p {
  margin-top: 12px;
  color: hsl(50deg, 100%, 80%);
}
</style>

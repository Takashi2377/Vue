<template>
  <p v-if="error">出錯囉!</p>
  <ul v-else>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  components: {
    AppListItem,
  },
  data() {
    return {
      error: false,
    };
  },
  errorCaptured(err, instance, info) {
    this.error = true;
  },
};
</script>
<style scoped></style>

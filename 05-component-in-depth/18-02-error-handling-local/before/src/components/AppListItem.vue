<template>
  <li><slot></slot></li>
</template>
<script>
export default {
  mounted() {
    throw new Error("AppListItem 組件異常");
  },
};
</script>
<style scoped></style>

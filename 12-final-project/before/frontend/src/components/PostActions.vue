<template>
  <div class="postActions">
    <TheIcon icon="like" fill="none" stroke="#000000" /><span>7w</span>
    <TheIcon icon="comment" fill="none" stroke="#000000" /><span>7.7w</span>
    <TheIcon icon="favorite" fill="none" stroke="#000000" /><span>77w</span>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
</script>

<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>

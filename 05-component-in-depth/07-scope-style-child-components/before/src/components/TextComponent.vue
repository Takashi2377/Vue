<template>
  <span class="text">
    <slot />
    <a href="#">子組件中的其他元素(非根元素)</a>
  </span>
</template>
<script>
export default {};
</script>
<style scoped>
:slotted(div) {
  color: rgb(173, 185, 81);
}
</style>

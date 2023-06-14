<template>
  <span class="text">
    <slot />
    <a href="#">非根元素的其他元素</a>
  </span>
</template>
<script>
export default {};
</script>
<style scoped>
:slotted(div) {
  color: rgb(137, 53, 53);
}
</style>

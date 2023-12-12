<template>
  <button class="button" :class="{ primary: color == 'primary', reverse }">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  reverse: Boolean,
});
</script>

<style scoped>
.button {
  border-radius: 10px;

  color: white;
  padding: 0.4rem 1.5rem;
  border: none;
}

.button.primary {
  background: rgb(0, 153, 255);
}
.button.reverse {
  background: none;
  border: 1px solid #e8e8e8;
  color: initial;
}
</style>

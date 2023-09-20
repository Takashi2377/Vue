<template>
  <div>
    <a :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: ["link", "title"],
  inheritAttrs: false, // class:blogLink傳遞無效
  mounted() {
    console.log(this.$attrs.class);
  },
};
</script>

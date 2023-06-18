<template>
  <input type="text" ref="inputControl" v-model="inputText" />
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    blur() {
      this.$refs.inputControl.blur();
    },
  },
  mounted() {
    this.$refs.inputControl.focus();
  },
};
</script>

<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>

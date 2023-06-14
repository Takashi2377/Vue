<template>
  <p><TextComponent>一些文字</TextComponent></p>
  <p>
    <TextComponent><div>slot 中的其他文字</div></TextComponent>
  </p>
</template>
<script>
import TextComponent from "./TextComponent.vue";
export default {
  components: {
    TextComponent,
  },
};
</script>
<style scoped>
p {
  background-color: rgb(74, 74, 124);
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 20px;
}

.text {
  color: rgb(74, 156, 133);
}

.text :deep(a) {
  display: block;
  text-decoration: none;
  color: rgb(80, 180, 137);
}
/* .text div {
  color: rgb(241, 249, 28);
} */
</style>

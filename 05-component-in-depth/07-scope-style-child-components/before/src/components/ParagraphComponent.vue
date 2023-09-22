<template>
  <p><TextComponent>一些文字</TextComponent></p>
  <p>
    <TextComponent><div>另一個slot中的文字</div></TextComponent>
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
  background-color: rgb(69, 77, 200);
  padding: 3rem;
  border-radius: 9px;
  margin-bottom: 2rem;
}

.text {
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 2rem;
  text-align: center;
}

.text :deep(a) {
  color: rgb(186, 95, 90);
  display: block;
  font-size: 2rem;
  text-decoration: none;
}
</style>

<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movie: {
        title: "純愛戰神乙骨憂太",
        description: "这是一段电影的描述",
      },
    };
  },
  // provide: { title: "測試電影" },
  provide() {
    return {
      title: this.movie.title,
    };
  },
};
</script>
<style scoped>
.card {
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>

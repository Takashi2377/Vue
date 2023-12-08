<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
    <!-- <PostDetails /> -->
    <!-- <PostUpload /> -->
  </div>
</template>

<script setup>
import PostItem from "../components/PostItem.vue";
import PostList from "../components/PostList.vue";
</script>

<style scoped></style>

<template>
  <div class="image-gallary-container">
    <img v-for="post in posts" :key="post.id" :src="post.image">
  </div>
</template>

<script setup>
  const props = defineProps(['posts'])
</script>

<style>
.image-gallary-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

img {
  margin: 5px;
  width: 200px
}
</style>

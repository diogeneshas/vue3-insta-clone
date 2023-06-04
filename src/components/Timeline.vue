<template>
  <div>
    <Container>
      <div class="timeline-container">
        <Card v-for="post in data" :key="post.id" :post="post"/>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "./Container.vue"
import Card from "./Card.vue"

const data = [
  {
    id: 1,
    username: 'selena',
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    caption: "hi! everyone"
  },
  {
    id: 2,
    username: 'fernanda',
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    caption: "hello there!"
  }
]
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>

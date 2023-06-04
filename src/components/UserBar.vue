<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2">{{username}}</a-typography-title>
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5">{{userInfo.posts}} posts</a-typography-title>
      <a-typography-title :level="5">{{userInfo.followers}} followers</a-typography-title>
      <a-typography-title :level="5">{{userInfo.following}} following</a-typography-title>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['username', 'userInfo'])
</script>

<style scoped>
.userbar-container {
  padding-bottom: 75px;
}

.bottom-content {
  display: flex;
  align-items: center;
}

.bottom-content h5{
  margin: 0;
  padding: 0;
  margin-right: 30px;
  align-items: center;
}
</style>

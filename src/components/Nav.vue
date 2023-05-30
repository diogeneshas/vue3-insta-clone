<template>
  <ALayoutHeader>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instragram</RouterLink>
          <a-input-search placeholder="input search text" v-model="searchUsername" @search="onSearch" style="width: 200px"/>
        </div>
        <div class="left-content">
          <a-button type="primary">Signup</a-button>
          <a-button type="primary">Login</a-button>
        </div>
      </div>
    </Container>
  </ALayoutHeader>
</template>

<script setup>
import { RouterLink } from "vue-router"
import Container from "./Container.vue"
import { ref } from "vue"

const searchUsername = ref("")

const onSearch = () => {}
</script>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}

.right-content {
    display: flex;
    align-items: center;
}

.right-content a {
    margin-right: 10px;
}

.left-content button{
  margin-left: 10px;
}
</style>

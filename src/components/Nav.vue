<template>
  <ALayoutHeader>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instragram</RouterLink>
          <a-input-search placeholder="input search text" @keypress.enter="onSearch" style="width: 200px" v-model:value="searchUsername"/>
          {{ searchUsername }}
        </div>
        <div class="left-content" v-if="!isAuthenticated">
          <AuthModal :isLogin="false"/>
          <AuthModal :isLogin="true"/>
        </div>
        <div class="left-content" v-else>
          <a-button type="primary">Profile</a-button>
          <a-button type="primary">Logout</a-button>
        </div>
      </div>
    </Container>
  </ALayoutHeader>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router"
import Container from "./Container.vue"
import { ref } from "vue"
import AuthModal from "./AuthModal.vue"

const router = useRouter()

const searchUsername = ref("")

const isAuthenticated = ref(false)


const onSearch = () => {
  if(searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`)
    searchUsername.value = ""
  }
}
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

.left-content {
  display: flex;
  align-items: center;
}

.left-content button{
  margin-left: 10px;
}
</style>

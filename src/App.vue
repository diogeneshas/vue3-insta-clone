<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue"
import { RouterView } from "vue-router"
</script>

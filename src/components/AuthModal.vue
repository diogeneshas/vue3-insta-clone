<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input v-model:value="userCredentials.username" v-if="!isLogin" placeholder="Username" class="input" />
      <a-input v-model:value="userCredentials.email" placeholder="Email" class="input" />
      <a-input v-model:value="userCredentials.password" placeholder="Password" class="input" type="password"/>
      <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
    </a-modal>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from "../stores/users"
import { storeToRefs } from "pinia"

  const userStore = useUserStore()

  const {errorMessage} = storeToRefs(userStore)

  const props = defineProps(['isLogin'])

  const visible = ref(false);

  const userCredentials = reactive({
    email: "",
    password: "",
    username: ""
  })

  const title = props.isLogin ? 'Login' : 'Signup'

  const showModal = () => {
    visible.value = true;
  };

  const handleOk = e => {
    userStore.handleSignup(userCredentials)
    // visible.value = false;
  };

</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>

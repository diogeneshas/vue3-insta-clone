<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk" :disabled="loading">Submit</a-button>
      </template>
      <div class="input-container" v-if="!loading">
        <a-input v-model:value="userCredentials.username" v-if="!isLogin" placeholder="Username" class="input" />
        <a-input v-model:value="userCredentials.email" placeholder="Email" class="input" />
        <a-input v-model:value="userCredentials.password" placeholder="Password" class="input" type="password"/>
      </div>
      <div class="spinner" v-else>
        <a-spin />
      </div>
      <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
    </a-modal>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from "../stores/users"
import { storeToRefs } from "pinia"

  const userStore = useUserStore()

  const {errorMessage, loading, user} = storeToRefs(userStore)

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

  const handleOk = async e => {
    await userStore.handleSignup(userCredentials)
    if(user.value) {
      visible.value = false
      userCredentials.email = ''
      userCredentials.password = ''
      userCredentials.username = ''
      userStore.clearErrorMessage()
    }

  };

  const handleCancel = () => {
    userStore.clearErrorMessage()
    visible.value = false;
  }

</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input v-model:value="value" v-if="!isLogin" placeholder="Username" class="input" />
      <a-input v-model:value="value" placeholder="Email" class="input" />
      <a-input v-model:value="value" placeholder="Username" class="input"/>
    </a-modal>
  </div>
</template>


<script setup>
import { ref } from 'vue';

  const props = defineProps(['isLogin'])

  const visible = ref(false);

  const title = props.isLogin ? 'Login' : 'Signup'

  const showModal = () => {
    visible.value = true;
  };

  const handleOk = e => {
    console.log(e);
    visible.value = false;
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

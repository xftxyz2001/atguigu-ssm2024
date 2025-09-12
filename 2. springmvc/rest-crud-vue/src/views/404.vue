<script setup>

import {useRouter} from "vue-router";
const router = useRouter();

const back = () => {
  router.push("/")
}
</script>

<template>
  <el-result
      icon="error"
      title="404"
      sub-title="抱歉, 你访问的页面不存在"
  >
    <template #extra>
      <el-button type="primary" @click="back">回到首页</el-button>
    </template>
  </el-result>
</template>

<style scoped>

</style>

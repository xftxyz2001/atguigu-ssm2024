<script setup>
import { RouterView } from 'vue-router'
import LeftMenu from "@/components/LeftMenu.vue";
import Header from "@/components/Header.vue";
import { reactive, watch } from 'vue'

const font = reactive({
  color: 'rgba(0, 0, 0, .05)',
})
</script>

<template>
  <el-watermark :font="font" :content="['尚硅谷', 'atguigu.com']">
    <el-container style="height: 100vh;width: 100vw">
      <el-aside style="width: 200px">
        <LeftMenu />
      </el-aside>
      <el-container>
        <el-header style="background-color: #000000">
          <Header/>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>

    </el-container>
  </el-watermark>

</template>

<style scoped>

</style>

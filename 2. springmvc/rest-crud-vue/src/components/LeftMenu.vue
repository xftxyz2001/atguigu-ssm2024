<template>
  <el-row>
    <el-col :span="24" style="height: 100vh;">
      <el-menu
          router
          active-text-color="#ffd04b"
          background-color="#545c64"
          :default-active="activeUrl"
          text-color="#fff"
          style="height: inherit"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="/">
          <el-icon><location/></el-icon>
          <span>控制台</span>
        </el-menu-item>
        <el-menu-item index="/employee/base">
          <el-icon><icon-menu /></el-icon>
          <span>员工列表 - 基础版</span>
        </el-menu-item>
        <el-menu-item index="/employee/all">
          <el-icon><icon-menu /></el-icon>
          <span>员工列表 - 完整版</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>权限维护</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>部门管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import {useMenuStore} from "@/stores/menuStore.js";
import {storeToRefs} from "pinia";

const {activeUrl} = storeToRefs(useMenuStore());



const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<script setup>
import {Fold} from '@element-plus/icons-vue'
</script>

<template>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="1">
      <!--     TODO 点击收缩菜单 -->
      <el-icon>
        <Fold/>
      </el-icon>
    </el-col>
    <el-col :span="22"></el-col>
    <el-col :span="1">
      <div>
        <el-dropdown>
          <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item disabled>切换为admin</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.row-bg {
  margin: 6px;
}
</style>

<template>
  <el-container>
    <el-header>
      <el-alert
          title="此页面仅为示例效果"
          type="warning"
          description="在学习完【前端工程化】之后，可以自己动手实现此页面完整逻辑"
          show-icon
      />

    </el-header>
    <el-main>
      <el-form :inline="true" :model="employee">
        <el-form-item label="姓名" style="width: 200px">
          <el-input v-model="employee.name"  clearable />
        </el-form-item>
        <el-form-item label="性别" style="width: 150px">
          <el-select v-model="employee.gender" clearable>
            <el-option label="男" value="1" />
            <el-option label="女" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="住址"  style="width: 200px">
          <el-input
              v-model="employee.address"
              clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >查询</el-button>
          <el-button type="success">新增</el-button>
          <el-button type="danger" v-if="checkData.length>0">批量删除</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="#" width="100" />
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="email" label="邮箱"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="address" label="住址" />
        <el-table-column prop="salary" label="薪资" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              修改
            </el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" style="margin-top: 20px"/>
    </el-main>
  </el-container>

</template>

<script  setup>
import {reactive, ref} from 'vue'
import { ElMessage } from 'element-plus'

const employee = reactive({
  name: 'zs',
  gender: "1",
  address: '11',
})

const checkData = ref([]);
const handleSelectionChange = (val) => {
  checkData.value = val
  ElMessage.info(`你选中了 ${checkData.value.length} 条数据`)
}

const tableData = [
  {
    id: 1,
    name: 'Tom',
    age: 18,
    gender: '男',
    email: 'tom@atguigu.com',
    salary: 10000,
    address: '北京市紫禁城'
  },
  {
    id: 2,
    name: 'Jerry',
    age: 18,
    gender: '女',
    email: 'Jerry@atguigu.com',
    salary: 99999,
    address: '北京市八达岭'
  }
]

const handleEdit = (index, row) => {
  console.log(index, row)
}

const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<style scoped>

</style>

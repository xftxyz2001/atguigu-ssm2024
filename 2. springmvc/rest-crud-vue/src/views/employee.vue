<template>
  <el-container>
    <el-header>
      <el-button type="primary" @click="addDialogVisible = true;dialogTitle = '新增员工'">新增</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
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

      <el-dialog v-model="addDialogVisible" :show-close="false" :title="dialogTitle" width="500" draggable>
        <el-form ref="form"
                 :model="addFormData" :rules="addRules" status-icon
                 style="padding: 10px" label-width="80px">
          <el-form-item label="id" prop="id" style="display:none;">
            <el-input v-model="addFormData.id" clearable></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="addFormData.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="addFormData.age" clearable></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addFormData.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="addFormData.gender">
              <el-radio value="男" border>男</el-radio>
              <el-radio value="女" border>女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="住址" prop="address">
            <el-input v-model="addFormData.address" clearable></el-input>
          </el-form-item>
          <el-form-item label="薪资" prop="salary">
            <el-input v-model="addFormData.salary" clearable></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="cancelAdd">取消</el-button>
            <el-button type="primary" @click="addEmploy">确认</el-button>
          </div>
        </template>
      </el-dialog>
    </el-main>
  </el-container>



</template>

<script  setup>
import {onMounted, reactive, ref, toValue, unref} from 'vue'

import employeeAPI from "@/api/employeeAPI.js";
import {ElMessage} from "element-plus";
const addDialogVisible = ref(false)
const addFormData = ref({})
const tableData = ref([
  {
    id: 1,
    name: 'Tom',
    age: 18,
    gender: '男',
    email: 'tom@atguigu.com',
    salary: 10000,
    address: '北京市紫禁城'
  }
])

const addRules = reactive({
  name: [{ required: true, message: '请输入名字', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  gender: [{ required: true, message: '请输入性别', trigger: 'blur' }]
})

const refreshEmploy = async ()=>{
  let data = await employeeAPI.getEmployees();
  tableData.value = data.data;
  return data.data;
}
onMounted(()=>{
  refreshEmploy();
})


const form = ref(null)
const dialogTitle = ref("")

const cancelAdd = ()=>{
  addDialogVisible.value = false
  addFormData.value = {};
}
const addEmploy = ()=>{
  form.value.validate(async (valid) => {
    if (valid) {
      if(addFormData.value.id){ //修改
        employeeAPI.updateEmployee(addFormData.value).then(res=>{
          ElMessage.success("用户修改成功")
          refreshEmploy();
        })
      }else {
        employeeAPI.createEmployee(addFormData.value).then(res=>{
          ElMessage.success("用户添加成功")
          refreshEmploy();
        })
      }
      addDialogVisible.value = false
      addFormData.value = {};
    }
  });
}

const handleEdit = (index, row) => {
  dialogTitle.value = "修改员工"
  addDialogVisible.value = true

  addFormData.value = toValue(row)
}

const handleDelete = (index, row) => {
  employeeAPI.deleteEmployee(row.id).then(res=>{
    ElMessage.success("用户删除成功")
    refreshEmploy();
  });
}
</script>

<style scoped>

</style>

import axios  from "axios";
import { ElMessage } from 'element-plus'
const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    timeout: 1000,
    headers: {'X-Sa-Token': 'test-token-value'}
});


http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    ElMessage.error(error.message + " - 网络错误，请重试")
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    if(response.data.code !== 200){
        ElMessage.error(response.data.msg);
        return Promise.reject(response);
    }
    // ElMessage.success(response.data.msg);
    return response.data;
}, function (error) {
    ElMessage.error(error.message + " - 服务器正忙，请稍后...")
    return Promise.reject(error);
});

export default http;

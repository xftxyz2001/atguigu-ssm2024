import http from '@/http'


export default {
    getEmployees() {
        return http.get('/employees')
    },
    getEmployee(id) {
        return http.get(`/employee/${id}`)
    },
    createEmployee(employee) {
        return http.post('/employee', employee)
    },
    updateEmployee(employee) {
        return http.put(`/employee`, employee)
    },
    deleteEmployee(id) {
        return http.delete(`/employee/${id}`)
    }
}

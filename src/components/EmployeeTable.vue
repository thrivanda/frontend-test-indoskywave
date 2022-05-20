<template>
    <div id="EmployeeTable">
        <h4 v-if="employees.length <1" class="mb-3">Form Tidak Terisi</h4>
        <div class="card text-center">
          <div class="card-header">
           
          </div>
          <div class="card-body">
        <table class="table table-striped table-bordered text-center">
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td v-if="editing === employee.id">
                        <input type="text" class="form-control" v-model="employee.name">
                    </td>
                    <td v-else>{{ employee.name }}</td>
                    <td v-if="editing === employee.id">
                        <input type="text" class="form-control" v-model="employee.email">
                    </td>
                    <td v-else>{{ employee.email }}</td>
                    <td v-if="editing === employee.id">
                        <button class="btn-small btn-success" @click="editEmployee(employee)">Save</button>
                        <button class="btn-small btn-danger ml-1" @click="editing = null">Cancel</button>
                    </td>
                    <td v-else>
                        <button class="btn-small btn-success" @click="editMode(employee.id)">Edit</button>
                        <button class="btn-small btn-danger ml-1" @click="$emit('del:employee', employee.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
         </div>
      <div class="card-footer text-muted">
    
  </div>
</div>

    </div>
</template>

<script>
    export default {
        name: "EmployeeTable",
        props: {
            employees: Array
        },
        data(){
            return{
                editing: null
            };
        },
        methods:{
            editMode(id) {
                this.editing = id;
            },
            editEmployee(employee){
                if(employee.name === " " || employee.email === " "){
                    return;
                }
                this.$emit("edit:employee", employee.id, employee);
                this.editing = null;
            }
        }
    };
</script>

<style scoped>
    .table{
        color: #ffff;
    }
    .table[data-v-45e085c0] {
      color: unset !important;
    }
</style>
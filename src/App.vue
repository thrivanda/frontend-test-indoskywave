<template class="body">
  <div id="app" class="container mt-3">
    <!-- <h3>Employee Table</h3> -->
    <EmployeeForm @add:employee="addEmployee" />
  <EmployeeTable :employees="employees" @del:employee="deleteEmployeee" @edit:employee="editEmployee" class="mt-4"/>
  </div>
</template>

<script>

import EmployeeTable from "./components/EmployeeTable.vue";
import EmployeeForm from "./components/EmployeeForm.vue";

export default {
  name: "App",
  data(){
    return{
      employees : [
        {
          id: 1,
          name: "Sherlock Holmes",
          email: "holmes@gmail.com"
        },
        {
          id: 2,
          name: "John Watson",
          email: "john@gmail.com"
        },
        {
          id: 3,
          name: "Alex Paul",
          email: "alex@gmail.com"
        }
      ]
    };
  },
  components: {
    EmployeeTable,
    EmployeeForm
  },
  methods:{
    addEmployee(employee){

      const lastId =
              this.employees.length>0 ?
              this.employees[this.employees.length -1].id :0;
      const id = lastId +1;
      const newEmployee = {...employee, id};
      this.employees = [...this.employees, newEmployee];
    },
    deleteEmployeee(id){
      this.employees = this.employees.filter(employee => employee.id !== id);
    },
    editEmployee(id, updateEmployee){
      this.employees = this.employees.map(employee =>
              employee.id === id ? updateEmployee : employee
      );
    }
  }

};
</script>

<style>

  .body{
    background: rgb(2,0,36);
    background: linear-gradient(127deg, rgba(2,0,36,1) 0%, rgba(39,203,176,0.87718837535014) 100%);

    color: #ffff;
  }

</style>

<template>
    <div class="border border-light mt-4">
    <h3 class="m-3">Form Karyawan</h3>

    <form class="m-3" @submit.prevent="handleEmployee">
        <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="form-control" placeholder="Masukan Nama"
                   v-model="employee.name"
                   ref="first" @focus="clearStatus"
                   @keypress="clearStatus"
                   :class="{ 'has-error': submitting && isValidName }">
        </div>
        <div class="form-group">
            <label >Email Address</label>
            <input type="text" class="form-control" placeholder="Masukan Email "
                   v-model="employee.email"
                   @focus="clearStatus"
                   @keypress="clearStatus"
                   :class="{ 'has-error': submitting && isValidEmail }">
        </div>
        <button type="submit" class="btn btn-primary">Tambah Karyawan</button>

        <p v-if="submitting & error" class="error-message mt-3">Mohon Isi Data Dengan Benar!</p>
        <p v-if="success" class="success-message mt-3">Karyawan Ditambahkan!</p>
    </form>

    </div>

</template>

<script>
    export default {
        name: "EmployeeForm",
        data(){
            return {
                submitting: false,
                success: false,
                error: false,
                employee:{
                    name: "",
                    email: ""
                }
            };
        },
        computed: {
          isValidName() {
              return this.employee.name === "";
          },
          isValidEmail() {
              return this.employee.email === "";
          }
        },
        methods:{
            handleEmployee(){
                this.clearStatus();
                this.submitting  = true;

                if (this.isValidName || this.isValidEmail) {
                    this.error = true;
                    return;
                }

                this.$emit("add:employee", this.employee);
                this.$refs.first.focus();
                this.employee = {
                    name: "",
                    email: ""
                };
                this.error = false;
                this.submitting = false;
                this.success = true;
            },
            clearStatus() {
                this.success = false;
                this.error = false;
            }
        }
    };
</script>

<style scoped>

    .error-message {
        color: #d33c40;
    }
    .success-message {
        color: #32a95d;
    }
    .m-3 {
    text-align: center;
    margin-top: 50px!important;
    }
    .btn-primary {
        margin-top: 50px!important;
    }

</style>
<template>
  <div class="form-wrapper">
    <h3>Create new account</h3>
    <form @submit.prevent="register" action="">
      <div v-if="errors" class="errors">
        <p v-for="(error, field) in errors" :key="field">
          {{error[0]}}
        </p>
      </div>
      <input type="text" v-model="form.username" placeholder="Username or Email"><br>
      <input type="password" v-model="form.password" placeholder="Password"><br>
      <input type="password" v-model="form.password_repeat" placeholder="Password"><br>
      <button> Register</button>
      <router-link to="/login" class="link">Login</router-link>
    </form>
  </div>
</template>

<script>
   export default {
    name: "Register",
    data() {
      return {
        form: {
          username: '',
          password: '',
          password_repeat: ''
        },
        errors: null
      }
    } 
  }
</script>

<style lang="scss" scoped>
</style>
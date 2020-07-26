<template>
  <div class="form-wrapper">
    <h3>Create new account</h3>
    <form @submit.prevent="register" action="">
      <div v-if="errors" class="errors">
        <p v-for="(error, field) in errors" :key="field">
          {{ error[0] }}
        </p>
      </div>
      <input
        type="text"
        v-model="form.email"
        placeholder="Email"
      /><br />
      <input
        type="password"
        v-model="form.password"
        placeholder="Password"
      /><br />
      <input
        type="password"
        v-model="form.password_confirm"
        placeholder="Confirm password"
      /><br />
      <button @click="register">Register</button>
      <router-link to="/login" class="link">Login</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_repeat: "",
      },
      errors: null,
    };
	},
	methods:{
		register(){
     axios.post('https://beta.mailbutler.io/api/v2/users/', this.form)
		.then(response =>{
			console.log(response);
		}); 
		}
		
	}
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="form-wrapper">
    <h3 style="font-family:'Arial' bold;">Login</h3>
    <form @submit.prevent="login" action>
      <div v-if="errors" class="errors">
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
      </div>
      <input type="text" v-model="form.email" placeholder="Email" />
      <br />
      <input type="password" v-model="form.password" placeholder="Password" />
      <br />
      <button @click="login" >Login</button>
      <router-link to="/register" class="link" 
        >Register</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: null,
      token: localStorage.getItem("token") || null,
    };
  },
  methods: {
    login() {
      axios
        .post("https://beta.mailbutler.io/api/v2/users/login", this.form)
        .then((response) => {
          console.log(response);
          let token = response.data.token;
          localStorage.setItem("token", token);
          this.$router.push("/");
          return token != null;
        });
      // this.$store.dispatch('retrieveToken',{
      // 	email: this.email,
      // 	password: this.password
      // })
    },
  },
};
</script>

<style lang="scss" scoped></style>

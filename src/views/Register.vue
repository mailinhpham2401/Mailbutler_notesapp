<template>
  <div class="form-wrapper">
    <h3>Create new account</h3>
    <form @submit.prevent="register" action>
      <div v-if="errors" class="errors">
        <p v-for="(error, field) in errors" :key="field">{{ error[0] }}</p>
      </div>
      <input type="text" v-model="form.email" placeholder="Username or Email" />
      <br />
      <input type="password" v-model="form.password" placeholder="Password" />
      <br />
      <button @click="register">Register</button>
      <router-link to="/login" class="link">Login</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: null,
    };
  },
  methods: {
    register(data) {
      axios
        .post("https://beta.mailbutler.io/api/v2/users", {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
					this.$router.push("/login");
					console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

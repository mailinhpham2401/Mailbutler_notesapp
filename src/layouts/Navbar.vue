<template>
  <div class="navbar">
    <b class="name">Mailbutler</b>
    <a href @click="logout" v-if="login">Logout</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  props: {},
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
    },
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  line-height: 50px;
  background-color: black;
  color: #fff;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  transition: font-weight 0.3s;
  a {
    color: #fff;
  }
  .name {
    font: 30px Arial, sans-serif;
    margin-top: 9px;
  }
}
</style>

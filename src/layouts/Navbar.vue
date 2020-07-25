<template>
  <div class="navbar">
    <b class="name">Mailbutler</b> {{ user.username }}
    <a href="" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    user: Object,
  },
  methods: {
    logout() {
      console.log("Logout");
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

<template>
  <div id="auth-layout">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "AuthLayout"
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
* {outline-width: 0;	font-family: 'Roboto';}
  #auth-layout {
    padding: 50px;
    .form-wrapper {
      background-color: black;
			color:#fff;
      padding: 20px;
      width: 300px;
      margin: 0 auto;
      border-radius: 4px;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
      h3 {
        text-align: center;
        margin-bottom: 30px;
      }
    }
    form {
      input {
        display: block;
        width: 100%;
        border: 2px solid #e6e6e6;
        padding: 6px 12px;
        transition: all 0.3s;
        &:focus {
          outline: 0;
          border-color: #4fb2c1;
        }
      }
      button {
        outline: 0;
        cursor: pointer;
        border: 1px solid rgb(4, 167, 12);
        background-color: rgb(4, 167, 12);
        color: white;
        padding: 6px 12px;
        transition: all 0.3s;
        &:hover {
          background-color: rgb(5, 92, 9);
        }
      }
      .errors {
        margin-bottom: 15px;
        padding: 10px 15px;
        color: #fff;
        background-color:red;
        font-size: 12px;
        p {
          margin: 0;
        }
      }
      .link {
        font-size: 85%;
        float: right;
				color: white;
      }
    }
  }
</style>
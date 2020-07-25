import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/views/Login";
import Register from "@/views/Register";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Default",
    redirect: "/home",
    component: DefaultLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
  },
  {
    path: "/login",
    redirect: "/auth/login",
  },
  {
    path: "/register",
    redirect: "/auth/register",
  },
];

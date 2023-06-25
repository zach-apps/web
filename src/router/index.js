import Vue from "vue";
import VueRouter from "vue-router";
import RecipeView from "../views/Recipes.vue";
import HomeView from "../views/Home.vue";
import RecipeViewer from "../components/RecipeViewer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/recipes",
    name: "Recipes",
    component: RecipeView
  },
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  { path: "/recipes/:id", component: RecipeViewer },
  { path: "/recipes/categories/:id", component: RecipeView },
  { path: "/recipes/authors/:id", component: RecipeView },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
});

export default router;

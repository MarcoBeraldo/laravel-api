<template>
  <div class="content">
    <AppHeader :title="title" />
    <main class="container mt-3">
      <!-- <HomePage /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import ContactsPage from "../components/pages/ContactsPage";

import HomePage from "./pages/HomePage";
export default {
  name: "App",

  components: {
    HomePage,
    ContactsPage,
    AppHeader,
  },
  data() {
    return {
      title: "Boolpress",
    };
  },
};
</script>


<style scoped>
</style>
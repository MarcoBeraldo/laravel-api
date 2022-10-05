<template>
  <div class="content">
    <AppHeader :title="title" />
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  name: "App",

  components: {
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
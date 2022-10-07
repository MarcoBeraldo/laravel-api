<template>
  <div>
    <h1>Dettaglio Post</h1>
    <PostCard :post="post" />
  </div>
</template>

<script>
import PostCard from "../Posts/PostCard.vue";
export default {
  name: "PostDetailPage",
  components: {
    PostCard,
  },
  data() {
    return {
      post: null,
    };
  },
  methods: {
    fetchPost() {
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.id)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("chiamata terminata");
        });
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style>
</style>
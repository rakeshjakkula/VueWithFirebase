<template>
  <div class="home">
    <BlogPost />
    <BlogPost />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: {
    BlogPost,
  },
};
</script>

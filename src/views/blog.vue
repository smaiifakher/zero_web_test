<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="post-area">
            <post v-for="post in posts" v-bind:key="post.id" :views="post.views"
                  :author="post.author" :category="post.category" :content="post.content" :date="post.date" :title="post.title"
            >

            </post>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <blogsidebar ></blogsidebar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "../components/blog/BlogPost";
import BlogSidebar from "../components/blog/BlogSidebar";
import JsonPosts from "../json/blog_posts.json"

export default {
  components: {Blogsidebar: BlogSidebar, Post},
  data: function () {
    return {
      pageName: "Blog us",
      pageDes: "This is Blog us page",
      posts: JsonPosts
    };
  },
  name: "blog"
}
</script>
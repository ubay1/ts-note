<template>
  <div class="posts">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <div class="main_doc">
      <PostCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      />
    </div>
  </div>
</template>
<script src="./slug.js"></script>
<style lang="scss" src="./tags.scss"></style>

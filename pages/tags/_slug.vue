<template>
  <div class="__tags_block">
    <Header />
    <div class="tags_doc">
      <PostCard
        v-for="post in articleTags"
        :key="post.path"
        :post="post"
        :class="{dark}"
      />
    </div>
  </div>
</template>
<script src="./slug.js"></script>
<style lang="scss" src="./tags.scss"></style>

<template>
  <div class="detail_article" :class="{dark: isTheme === 'light' ? false : true}">
    <div class="header">
      <div class="deskripsi">
        {{ article.title }}
      </div>
      <div class="diupdate">
        {{ $moment(article.createdAt).format('LLLL') }}
      </div>
    </div>

    <div class="img_header">
      <img :src="article.image" alt="">
    </div>

    <nuxt-content :document="article" />

    <div class="footer">
      <!-- Referensi: -->
      <p
        v-for="(article, index) in article.referensi"
        :key="`article-${index}`"
      >
        <a :href="article" target="_blank" class="referensi">
          {{ article }}
        </a>
      </p>
    </div>
  </div>
</template>

<script src="./slug.js"></script>

<style lang="scss" src="./slug.scss"></style>

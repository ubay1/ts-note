<template>
  <div class="__main_block">
    <Header />
    <!-- <ColorModePicker /> -->
    <div class="main_doc">
      <!-- <PostCard
        v-for="post in articleAll"
        :key="post.path"
        :post="post"
        :total="allArticles.length"
        :class="{dark}"
      /> -->
      <PostCard
        :articles="paginatedArticles"
        :total="allArticles.length"
        :nameroute="routeName"
      />
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header.vue'
// import ColorModePicker from '@/components/ColorModePicker'
// eslint-disable-next-line no-unused-vars
import getContent from '@/utils/getContent'
import PostCard from '~/components/PostCard'
export default {
  components: {
    Header,
    PostCard
    // ColorModePicker
  },
  async asyncData ({ params, error, $content }) {
    try {
      const content = await getContent($content, params, error)
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      dark: false,
      isTheme: '',
      routeName: '',
      searchValue: ''
    }
  },
  created () {
    this.$nuxt.$on('searchArticle', (data) => {
      this.searchValue = data
    })

    this.routeName = this.$route.name
  },
  mounted () {
  },
  head () {
    return {
      title: 'Page 1 - Programming Note'
    }
  }
}
</script>

<style lang="scss" src="./home.scss"></style>

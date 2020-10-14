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
      // const articleAll = await $content('articles', { deep: true })
      //   .limit(3)
      //   .fetch()
      // // eslint-disable-next-line no-console
      // console.log(articleAll)
      // return { articleAll }
      const content = await getContent($content, params, error)
      // eslint-disable-next-line no-console
      console.log(content)
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
      routeName: ''
    }
  },
  created () {
    this.$nuxt.$on('theme', (data) => {
      this.isTheme = data
      this.isTheme === 'dark' ? this.dark = true : this.dark = false
    })

    this.routeName = this.$route.name
    // eslint-disable-next-line no-console
    // console.log(this.routeName)
  },
  mounted () {
    // this.routeName = this.$route.name
  },
  head () {
    return {
      title: 'Page 1 - Programming Note'
    }
  }
}
</script>

<style lang="scss" src="./home.scss"></style>

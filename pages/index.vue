<template>
  <div class="__main_block">
    <Header />
    <!-- <ColorModePicker /> -->
    <div class="main_doc">
      <PostCard
        v-for="post in articleAll"
        :key="post.path"
        :post="post"
        :class="{dark}"
      />
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header.vue'
// import ColorModePicker from '@/components/ColorModePicker'
import PostCard from '~/components/PostCard'
export default {
  components: {
    Header,
    PostCard
    // ColorModePicker
  },
  async asyncData ({ params, error, $content }) {
    try {
      const articleAll = await $content('articles', { deep: true }).fetch()
      // eslint-disable-next-line no-console
      console.log(articleAll)
      return { articleAll }
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
      isTheme: ''
    }
  },
  created () {
    this.$nuxt.$on('theme', (data) => {
      this.isTheme = data
      this.isTheme === 'dark' ? this.dark = true : this.dark = false
    })
  }
}
</script>

<style lang="scss" src="./home.scss"></style>

/* eslint-disable no-console */

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
      const articleTags = await $content('articles', { deep: true })
        .where({ tags: { $contains: params.slug } })
        .fetch()
      // eslint-disable-next-line no-console
      console.log(articleTags)
      return { articleTags }
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

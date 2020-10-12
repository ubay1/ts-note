/* eslint-disable no-console */

import PostCard from '~/components/PostCard'
export default {
  components: {
    PostCard
  },
  async asyncData ({ params, error, $content }) {
    try {
      const posts = await $content('articles', { deep: true })
        .where({ tags: { $contains: params.slug } })
        .fetch()

      console.log(posts)
      return { posts }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  head () {
    return {
      title: 'Tags',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cool nuxt blog tags'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-blog.com/tags'
        }
      ]
    }
  }
}

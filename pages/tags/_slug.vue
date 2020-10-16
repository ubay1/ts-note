<template>
  <div class="__tags_block">
    <Header />
    <div class="tags_doc">
      <PostCard
        :articles="articlesByTag"
        :nameroute="routeName"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import PostCard from '@/components/PostCard'

export default {
  // name: 'TagPage',
  components: {
    Header,
    PostCard
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      // .only(['title', 'description', 'image', 'slug', 'tags'])
      .where({ tags: { $contains: params.slug } })
      .fetch()

    const articlesByTag = articles.filter((article) => {
      const articleTags = article.tags.map(x => x.toLowerCase())
      return articleTags.includes(params.slug) // cari yang true
    })

    // eslint-disable-next-line no-console
    console.log(articlesByTag)
    return {
      articlesByTag
    }
  },
  data () {
    return {
      routeName: ''
    }
  },
  created () {
    this.routeName = this.$route.name
  },
  methods: {
    capitalise (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  },
  head () {
    return {
      title: `Articles Tagged - ${this.capitalise(this.$route.params.slug)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/tags/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./tags.scss"></style>

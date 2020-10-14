<template>
  <div class="bg_all_post">
    <!-- <nuxt-link :to="post.path"> -->

    <div class="list_articles">
      <div class="image">
        <img :src="post.image" alt="">
      </div>

      <div class="bg_main">
        <div class="title">
          <nuxt-link :to="post.path">
            {{ post.title }}
          </nuxt-link>
        </div>
        <nuxt-link class="deskripsi" :to="post.path">
          <div>
            {{ post.description }}
          </div>
        </nuxt-link>
        <div class="tag">
          <nuxt-link
            v-for="(itemTag, index) in post.tags"
            :key="`indexTag-${index}`"
            :to="`/tags/${post.tags}`"
          >
            {{ itemTag }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- <div class="dibuat">
      <small>{{ $moment(post.createdAt).format('LLLL') }}</small>
    </div> -->
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // eslint-disable-next-line no-undef
      tags: []
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.post)
  }
}
</script>

<style scoped></style>

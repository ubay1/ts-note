<template>
  <div>
    {{ post }} <br>
    Special state in `window.__NUXT__`
  </div>
</template>

<script>
export default {
  async asyncData ({ app, params, error }) {
    // eslint-disable-next-line no-unused-vars
    const id = params.id
    try {
      const post = await app.$nuxtRepository.show(1)
      // eslint-disable-next-line no-console
      console.log(post)
      return { post }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error(error))
    }
  },
  data () {
    return {
      dataPost: this.post
    }
  }
}
</script>

// /* eslint-disable no-console */
// export default {
//   name: 'TagListPage',
//   async asyncData ({ $content }) {
//     function onlyUnique (value, index, self) {
//       return self.indexOf(value) === index
//     }
//     const articles = await $content('articles').only(['tags']).fetch()
//     const tags = articles.flatMap(article => article.tags).filter(onlyUnique)

//     console.log(articles)
//     console.log(tags)
//     return {
//       tags
//     }
//   },
//   head () {
//     return {
//       title: 'Article Tags',
//       link: [
//         {
//           hid: 'canonical',
//           rel: 'canonical',
//           href: `${this.$config.baseUrl}/tags`
//         }
//       ]
//     }
//   }
// }

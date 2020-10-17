---
title: Layout nuxtjs
description: Bermain dengan layout pada nuxtjs 
tags: [nuxtjs]
image: https://avatars2.githubusercontent.com/u/23360933?s=200&v=4
published: 2020-10-17 11:35
---

Layout sangat membantu saat Anda ingin mengubah tampilan dan nuansa aplikasi Nuxt.js. Misalnya Anda ingin menyertakan sidebar atau memiliki layout yang berbeda untuk seluler dan desktop <br><br>

# Custom Layout
kita dapat membuat layout sendiri pada folder **layouts** <br><br>

kita buat **layouts/blog.vue**
```vue
<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
```

kemudian kita gunakan properti **layout** dengan nilai **'blog'** di halaman dimana kita ingin gunakan layout tersebut <br><br>

kita gunakan di **pages/pagesTwo.vue**
```vue
<template>
  <div>
    Ini halaman 2
  </div>
</template>
<script>
  export default {
    layout: 'blog'
  }
</script>
```

coba lihat hasilnya. :blush:
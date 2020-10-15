<template>
  <div>
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        All Tags
      </h2>
    </div>
    <ul>
      <li v-for="tag in tags" :key="tag" class="text-center mb-2">
        <nuxt-link
          :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
          class="text-4xl hover:underline"
        >
          {{ tag }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script src="./slug.js"></script>

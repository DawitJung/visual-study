<template>
  <div class="text-gray-700 flex space-x-2">
    <div v-for="([title, link], idx) of links" :key="title" class="flex">
      <p v-if="idx > 0" class="mr-2 text-gray-500">/</p>
      <nuxt-link :to="link" class="underline block text-gray-700">
        {{ title }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    links: { type: Array, required: true },
  },
}
</script>

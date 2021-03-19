<template>
  <div class="text-gray-700 flex space-x-2 mx-4">
    <div
      v-for="({ localeName, path }, idx) of paths"
      :key="localeName"
      class="flex"
    >
      <p v-if="idx > 0" class="mr-2 text-gray-500">/</p>
      <nuxt-link :to="path" class="underline block text-gray-700">
        {{ localeName }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    paths: { type: Array, default: () => [] },
  },
}
</script>

<template>
  <ol class="space-y-2">
    <li
      v-for="{ title, path, publish } of cs"
      :key="title"
      class="flex items-center"
    >
      <p class="flex-1">
        {{ title }}
        <sup v-if="!publish" class="text-red-400">HELP!</sup>
      </p>
      <div class="flex space-x-2">
        <nuxt-link
          class="block py-1 px-4 bg-yellow-300 text-yellow-900 rounded-md shadow"
          :to="path"
        >
          학습
        </nuxt-link>
        <nuxt-link
          class="block py-1 px-4 bg-yellow-300 text-yellow-900 rounded-md shadow"
          :to="`${path}/questions`"
        >
          문제
        </nuxt-link>
      </div>
    </li>
  </ol>
</template>
<script>
export default {
  props: {
    courses: { type: Array, default: () => [] },
  },
  data() {
    if (process.env.NODE_ENV === 'production')
      return { cs: this.courses.map(({ publish }) => publish) }
    return { cs: this.courses }
  },
}
</script>

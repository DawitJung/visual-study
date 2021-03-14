<template>
  <div
    class="w-full max-w-6xl mx-auto my-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-xl">수학</h1>
      <div class="space-y-2">
        <div
          v-for="{ title, path, publish } of courses.math"
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
              :to="`/math/${path}`"
            >
              학습
            </nuxt-link>
            <nuxt-link
              class="block py-1 px-4 bg-yellow-300 text-yellow-900 rounded-md shadow"
              :to="`/math/${path}/questions`"
            >
              문제
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-xl">컴퓨터</h1>
      <div class="space-y-2">
        <div
          v-for="{ title, path, publish } of courses.computer"
          :key="title"
          class="flex items-center"
        >
          <p class="flex-1">
            {{ title }}
            <sup v-if="!publish" class="text-red-400">HELP!</sup>
          </p>
          <div class="flex space-x-2">
            <nuxt-link
              class="block py-1 px-4 bg-blue-300 text-blue-900 rounded-md shadow"
              :to="`/computer/${path}`"
            >
              학습
            </nuxt-link>
            <nuxt-link
              class="block py-1 px-4 bg-blue-300 text-blue-900 rounded-md shadow"
              :to="`/computer/${path}/questions`"
            >
              문제
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import originalCourses from '~/assets/courses'
export default {
  data() {
    return { originalCourses }
  },
  head: { title: '비주얼 스터디' },
  computed: {
    courses() {
      if (process.env.NODE_ENV === 'production') {
        const newCourses = {}
        for (const group in this.originalCourses) {
          newCourses[group] = this.originalCourses[group].filter(
            (c) => c.publish
          )
        }
        return newCourses
      } else {
        return originalCourses
      }
    },
  },
}
</script>

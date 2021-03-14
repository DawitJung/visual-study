<template>
  <div class="w-full max-w-6xl mx-auto space-y-4 my-4">
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-lg">수학</h1>
      <div class="space-y-2">
        <div
          v-for="[title, link] of mathClasses"
          :key="title"
          class="flex items-center"
        >
          <p class="flex-1">{{ title }}</p>
          <div class="flex space-x-2">
            <nuxt-link
              class="block py-1 px-4 bg-yellow-300 text-yellow-900 rounded-md shadow"
              :to="`/math/${link}`"
            >
              학습
            </nuxt-link>
            <nuxt-link
              class="block py-1 px-4 bg-yellow-300 text-yellow-900 rounded-md shadow"
              :to="`/math/${link}/questions`"
            >
              문제
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-lg">컴퓨터</h1>
      <div class="space-y-2">
        <div
          v-for="[title, link] of computerClasses"
          :key="title"
          class="flex items-center"
        >
          <p class="flex-1">{{ title }}</p>
          <div class="flex space-x-2">
            <nuxt-link
              class="block py-1 px-4 bg-blue-300 text-blue-900 rounded-md shadow"
              :to="`/computer/${link}`"
            >
              학습
            </nuxt-link>
            <nuxt-link
              class="block py-1 px-4 bg-blue-300 text-blue-900 rounded-md shadow"
              :to="`/computer/${link}/questions`"
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
export default {
  data() {
    return {
      mathClasses: [
        ['지수', 'exponential'],
        ['로그', 'log'],
        ['삼각함수', 'trigonometric_functions'],
      ],
      computerClasses: [
        ['인터넷', 'internet'],
        ['하드웨어', 'hardware'],
        ['소프트웨어', 'software'],
      ],
    }
  },
  head: { title: '비주얼 스터디' },
}
</script>

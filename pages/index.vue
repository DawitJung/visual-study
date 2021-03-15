<template>
  <div
    class="w-full max-w-6xl mx-auto my-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4"
  >
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-xl">수학</h1>
      <course-list :courses="mathCourses" />
    </section>
    <section class="p-4 space-y-4 shadow rounded-lg bg-white">
      <h1 class="font-bold text-xl">컴퓨터</h1>
      <course-list :courses="computerCourses" />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mathCourses: [
        { title: '대수학', path: '/math/algebra', publish: false },
        { title: '삼각법', path: '/math/trigonometry', publish: false },
      ],
      computerCourses: [
        {
          title: '컴퓨터 과학',
          path: '/computer/computer-science',
          publish: false,
        },
        { title: '인터넷', path: '/computer/internet', publish: false },
      ],
    }
  },
  head: { title: '비주얼 스터디' },
}
</script>

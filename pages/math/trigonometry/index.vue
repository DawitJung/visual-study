<template>
  <article class="shadow bg-white p-4 rounded-lg space-y-4">
    <div
      class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
    >
      <h1 class="text-3xl font-bold">삼각법</h1>
      <p class="text-gray-500">
        <span>작성중</span>
      </p>
    </div>
    <hr />
    <div class="space-y-4">
      <div class="space-y-4">
        <h2 class="font-bold text-xl">개요</h2>
        <p>작성 부탁드립니다.</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      courses: [
        {
          title: '삼각함수',
          path: '/math/trigonometry/trigonometric-functions',
          publish: false,
        },
      ],
    }
  },
  ko: '삼각법',
}
</script>

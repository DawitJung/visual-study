<template>
  <article class="shadow bg-white p-4 rounded-lg space-y-4">
    <div
      class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
    >
      <h1 class="text-3xl font-bold">일차함수</h1>
      <p class="text-gray-500">
        <span>예상 학습 소요 시간: 30분</span> |
        <span>작성중</span>
      </p>
    </div>
    <hr />
    <div class="space-y-4">
      <div class="space-y-4">
        <h2 class="font-bold text-xl">학습 목표</h2>
        <ul class="list-disc list-inside">
          <li>작성 부탁드립니다.</li>
        </ul>
      </div>
      <hr />
      <div class="space-y-4">
        <h2 class="font-bold text-xl">점들</h2>
        <points />
        <p>작성 부탁드립니다.</p>
      </div>
      <div class="space-y-4">
        <h2 class="font-bold text-xl">기울기</h2>
        <slope />
        <p>작성 부탁드립니다.</p>
      </div>
    </div>
  </article>
</template>
<script>
import Points from '~/components/visualizations/math/linear-function/Points'
import Slope from '~/components/visualizations/math/linear-function/Slope'
export default {
  ko: '일차함수',
  components: { Points, Slope },
  head: {
    title: '일차함수 | 비주얼 스터디',
  },
}
</script>

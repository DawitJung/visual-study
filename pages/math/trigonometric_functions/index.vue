<template>
  <div class="w-full max-w-6xl mx-auto py-4 space-y-4">
    <breadcrumbs
      class="px-4"
      :links="[
        ['홈', '/'],
        ['수학', '/math'],
        ['삼각 함수', '/math/trigonometric_functions'],
      ]"
    />
    <article class="shadow bg-white p-4 rounded-lg space-y-4">
      <div
        class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
      >
        <h1 class="text-3xl font-bold">삼각 함수</h1>
        <p class="text-gray-500">
          <span>예상 학습 소요 시간: 30분</span> |
          <span>작성중</span>
        </p>
      </div>
      <div class="space-y-2">
        <div>
          <h2 class="font-bold text-xl">학습 목표</h2>
          <ul class="list-disc list-inside">
            <li>SIN 함수를 이해한다.</li>
            <li>COS 함수를 이해한다.</li>
            <li>TAN 함수를 이해한다.</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-xl">SIN, COS 함수</h2>
          <TrigonometricFunctionsBasic />
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import TrigonometricFunctionsBasic from '~/components/math/TrigonometricFunctionsBasic'
import Breadcrumbs from '~/components/Breadcrumbs'
export default {
  components: { TrigonometricFunctionsBasic, Breadcrumbs },
  head: {
    title: '삼각함수 | 비주얼 스터디',
  },
}
</script>

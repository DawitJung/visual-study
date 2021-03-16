<template>
  <div class="w-full max-w-6xl mx-auto py-4 space-y-4">
    <breadcrumbs
      class="px-4"
      :links="[
        ['홈', '/'],
        ['컴퓨터', '/couputer'],
        ['컴퓨터 과학', '/couputer/computer-science'],
      ]"
    />
    <article class="shadow bg-white p-4 rounded-lg space-y-4">
      <div
        class="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center"
      >
        <h1 class="text-3xl font-bold">컴퓨터 과학</h1>
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
        <div class="space-y-4">
          <h2 class="font-bold text-xl">세부 자료 ({{ courses.length }}개)</h2>
          <course-list :courses="courses" />
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [],
    }
  },
  ko: '컴퓨터 과학',
}
</script>

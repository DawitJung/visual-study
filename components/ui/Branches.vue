<template>
  <ol class="space-y-2">
    <li
      v-for="{ localeName, path, isPublic } of list"
      :key="localeName"
      class="flex items-center"
    >
      <p class="flex-1">
        {{ localeName }}
        <sup v-if="!isPublic" class="text-red-400">HELP!</sup>
      </p>
      <div class="flex space-x-2">
        <nuxt-link
          class="block py-1 px-4 rounded-md shadow"
          :class="[`bg-${buttonColor}-300`, `text-${buttonColor}-900`]"
          :to="path"
        >
          학습
        </nuxt-link>
        <nuxt-link
          class="block py-1 px-4 rounded-md shadow"
          :class="[`bg-${buttonColor}-300`, `text-${buttonColor}-900`]"
          :to="`${path}#questions`"
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
    branches: { type: Array, default: () => [] },
    buttonColor: { type: String, default: 'yellow' },
  },
  data() {
    if (process.env.NODE_ENV === 'production')
      return { list: this.branches.filter(({ isPublic }) => isPublic) }
    return { list: this.branches }
  },
}
</script>

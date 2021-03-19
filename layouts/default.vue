<template>
  <div class="bg-gray-200 min-h-screen">
    <header class="w-full bg-white shadow-md">
      <div
        class="w-full max-w-6xl mx-auto flex items-center justify-between p-4"
      >
        <div>
          <nuxt-link to="/">비주얼 스터디 📐</nuxt-link>
        </div>
        <div>
          <a href="https://github.com/DawitJung/visual-study" class="text-2xl">
            <i class="icon-github-circled"></i>
          </a>
        </div>
      </div>
    </header>
    <div class="w-full max-w-6xl mx-auto py-4 space-y-4">
      <breadcrumbs :paths="pathInfo.breadcrumbs" />
      <Nuxt />
      <div
        v-if="pathInfo.subBranches.length > 0"
        class="shadow bg-white p-4 rounded-lg"
      >
        <branches :branches="pathInfo.subBranches" />
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/ui/Breadcrumbs'
import Branches from '~/components/ui/Branches'
export default {
  components: { Breadcrumbs, Branches },
  data() {
    return { pathInfo: this.$store.getters.pathInfo(this.$route.path) }
  },
  watch: {
    $route({ path }) {
      console.log(path)
      this.pathInfo = this.$store.getters.pathInfo(path)
      console.log(this.pathInfo)
    },
  },
}
</script>
<style></style>

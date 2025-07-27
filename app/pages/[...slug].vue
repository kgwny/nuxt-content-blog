<script setup lang="ts">
const route = useRoute()

const { data: pages } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('contents')
    .path(route.path)
    .first()
})

if (!pages.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="prose max-w-none">
    <ContentRenderer
      v-if="pages"
      :value="pages"
    />
  </div>
</template>

<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <ContentRenderer :value="article" />
  </article>
</template>

<script setup lang="ts">
const { params } = useRoute()
const { data: article } = await useAsyncData(() =>
  queryContent(`/articles/${params.slug}`).findOne()
)
</script>

<template>
  <div>
    <h1>記事一覧</h1>
    <pre>{{ articles }}</pre> <!-- ← debug表示 -->
    <ul>
      <li v-for="article in articles" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent().find()  // ← まずは空で試す
)

console.log(articles.value)
</script>

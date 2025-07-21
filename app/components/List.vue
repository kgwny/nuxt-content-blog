<script setup>
import { computed } from 'vue'

const { data: contents } = await useAsyncData('content', () =>
  queryCollection('content').all()
)

const filteredContents = computed(() =>
  (contents.value || []).filter(
    (content) => (
      content.navigation === false
      && content.draft === false
    )
  )
)
</script>

<template>
  <ul v-if="filteredContents.length">
    <li v-for="content in filteredContents" :key="content.id">
      <NuxtLink :to="content.path">
        {{ content.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

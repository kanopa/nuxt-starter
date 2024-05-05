<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Default',
  titleTemplate: (title) => (title !== 'Default' ? `${title} | Site` : title),
})
</script>

<template>
  <nuxt-page />
</template>

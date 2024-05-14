<script lang="ts" setup>
const countStore = useCountStore()
</script>

<template>
  <div class="flex">
    <div class="flex flex-1">
      <NuxtWelcome />
    </div>
    <div class="flex flex-1 flex-items-center">
      {{ $t('localizedText') }}
      {{ countStore.count }}
    </div>
  </div>
</template>

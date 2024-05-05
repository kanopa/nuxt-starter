<script setup lang="ts">
const currentError = useError()
</script>

<template>
  <div>Current error is: {{ currentError?.message }}</div>
</template>

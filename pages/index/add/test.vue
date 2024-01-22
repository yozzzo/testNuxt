<template>
  追加のテスト
</template>
  
<script setup>
const config = useRuntimeConfig()
const env = process.server ? 'Server' : 'Client'
useHead({
  title: "useHeadデモ",
  script: [
    {
      type: "text/javascript",
      innerHTML: `console.log("${env} script loaded(5)")`,
      tagPriority: 5
    },
    {
      type: "text/javascript",
      innerHTML: `console.log("${env} script loaded(4)")`,
      tagPriority: 4
    }
  ]
})
</script>
  
<style></style>
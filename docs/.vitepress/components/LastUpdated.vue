<template>
  <div class="last-updated">
    最后更新于 {{ lastUpdated }}
  </div>
</template>

<script>
export default {
  computed: {
    lastUpdated() {
      return new Date(document.lastModified).toLocaleString()
    },
  },
}
</script>

<style scoped>
.last-updated {
  font-size: 14px;
  color: #666;
}
</style>
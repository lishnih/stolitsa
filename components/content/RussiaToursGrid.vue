<script setup lang="ts">
const { data } = await useAsyncData('tour_russia',
    () => queryContent('/tour_russia').where({ _path: { $ne: "/tour_russia" }, _extension: "md" }).find());
</script>

<template>
  <UiCardTour v-for="i in data" :item="i" />
</template>
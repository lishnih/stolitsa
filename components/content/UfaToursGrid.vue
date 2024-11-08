<script setup lang="ts">
const { data } = await useAsyncData('tour_ufa',
    () => queryContent('/tour_ufa').where({ _path: { $ne: "/tour_ufa" }, _extension: "md" }).find());
</script>

<template>
  <UiCardTour v-for="i in data" :item="i" />
</template>
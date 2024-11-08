<script setup lang="ts">
const { data } = await useAsyncData('tour_bashkortostan',
    () => queryContent('/tour_bashkortostan').where({ _path: { $ne: "/tour_bashkortostan" }, _extension: "md" }).find());
</script>

<template>
  <UiCardTour v-for="i in data" :item="i" />
</template>
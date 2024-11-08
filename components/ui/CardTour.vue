<script setup lang="ts">
const cardConfig = useAppConfig().directory?.grid?.card;

defineProps(['item']);
</script>

<template>

  <NuxtLink :to="item._path" class="col-span-1 rounded relative group transition-all">
    <div class="flex items-start">
      <DirectoryFeaturedTag2 class="ml-6" v-if="item.featured" />
      <NuxtImg sizes="170px" :alt="`${item.title} banner`"
        class="rounded-t object-cover" :src="item.card_image ?? '/mockup170x130.jpg'" />

      <div class="p-6">
        <h3 class="m-0 text-lg font-semibold dark:text-gray-50">
          {{ item.title }}
        </h3>
        <p class="line-clamp-4 mt-2">
          {{ item.description }}
        </p>
        <div class="p-0 mt-2 flex gap-2">
          <UiTag v-for="tag in item.tags" :tag="tag" />
        </div>
      </div>
    </div>
  </NuxtLink>

</template>
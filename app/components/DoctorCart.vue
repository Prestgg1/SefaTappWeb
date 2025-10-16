<template>
      <div
              class="bg-card-light dark:bg-card-dark rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              <button
                class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
              >
                <Icon name="mdi:heart"  class="text-red-500 text-2xl" v-if="isFavorite" @click="isFavorite = !isFavorite" />
                <Icon name="mdi:heart-outline" class="text-2xl" v-else @click="isFavorite = !isFavorite" />
              </button>
              <img :alt="doctor.user.name" :src="doctor.user.image" class="w-full h-48 object-cover" />
              <div class="p-5 flex flex-col flex-grow">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                    {{ doctor.user.name }}
                  </h3>
                  <div
                    class="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full"
                  >
                    <Icon name="mdi:star" />
                    <span class="text-xs font-bold">{{ doctor.average_rating }}</span>
                  </div>
                </div>
                <p class="text-sm text-primary font-semibold mb-4">
                  {{ doctor.doctor_category.title }}
                </p>
                <NuxtLink :to="`/demo/reservation/${doctor.id}`">
                  <button
                    class="mt-auto w-full bg-primary text-white text-sm font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Rezervasiya Et
                  </button>
                </NuxtLink>
              </div>
            </div>
</template>
<script setup lang="ts">
  import type { Doctors } from '@/utils/useApi'
  type Doctor = Doctors extends (infer T)[] ? T : never
const isFavorite = ref(false)
  const props = defineProps<{ doctor: Doctor }>()
</script>
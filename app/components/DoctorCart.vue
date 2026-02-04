<template>
    <div
      class="bg-card-light  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative"
    >
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
      >
        <Icon
          name="mdi:heart"
          class="text-red-500 text-2xl"
          v-if="isFavorite"
          @click="toggleFavorite()"
        />
        <Icon
          name="mdi:heart-outline"
          class="text-2xl"
          v-else
          @click="toggleFavorite()"
        />
      </button>
  
      <img
        :alt="doctor.user.name"
        :src="doctor.user.image || ''"
        class="w-full h-48 object-cover"
      />
      <!-- TODO: Buradaki image deyismeli -->
      <div class="p-5 flex flex-col grow">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-bold text-gray-900 ">
            {{ doctor.user.name }}
          </h3>
          <div
            class="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full"
          >
            <Icon name="mdi:star" />
            <span class="text-xs font-bold">{{ doctor.average_rating }}</span>
          </div>
        </div>
        <p class="text-sm text-primary font-semibold mb-4">
          {{ doctor.doctor_category.title }}
        </p>
        <NuxtLink :to="`/application/reservation/${doctor.id}`">
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
  import { ref } from 'vue'
  import type { Doctors } from '~/utils/client'
  import useDebounce from '~/composables/useDebounce'
  
  type Doctor = Doctors['data'][number]
  const props = defineProps<{ doctor: Doctor }>()
  
  const isFavorite = ref<boolean>(Boolean(props.doctor.has_favorited))
  
  
  const updateFavoriteApi = useDebounce(async (favorited: boolean) => {
    try {
      if (favorited) {
        await client().GET(`/favorites/{modelType}/{modelId}`, {
          params: {
            path: {
              modelType: 'doctor',
              modelId: Number(props.doctor.id)
            }
          }
        })
      } else {
        await client().DELETE(`/favorites/{modelType}/{modelId}`, {
          params: {
            path: {
              modelType: 'doctor',
              modelId: Number(props.doctor.id)
            }
          }
        })
      }
    } catch (error) {
      console.error('Favorit əməliyyatı xətası:', error)
      isFavorite.value = !favorited
    }
  }, 800)
  
  const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
    updateFavoriteApi(isFavorite.value)
  }
  </script>
  
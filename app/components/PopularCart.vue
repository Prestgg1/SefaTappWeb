<template>
    <div class="relative">
      <!-- Loader -->
      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="bg-card-light border dark:bg-card-dark rounded-xl h-72"
        ></div>
      </div>
  
      <!-- Carousel -->
      <div v-else>
        <UCarousel
          v-slot="{ item }"
          arrows
          dots
          loop
          :autoplay="{ delay: 3000 }"
          :items="doctors"
          :ui="{
            item: 'basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2',
            arrows: 'text-teal-600 hover:text-teal-700',
          }"
        >
          <DoctorCart :doctor="item" />
        </UCarousel>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Doctors } from '~/utils/client'
  import client from '~/utils/client'
  
  const doctors = ref<Doctors['data']>([])
  const loading = ref(true)
  
  onMounted(async () => {
    try {
      const req = await client().GET('/doctors')
      doctors.value = (req.data?.data ?? [])
      console.log(doctors.value)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  })
  </script>
  
<template>
  <section class="py-16 px-4">
    <!-- Başlıq -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-900  tracking-tight">
        Həkim İxtisas Kateqoriyaları
      </h2>
      <p class="mt-2 text-lg text-gray-500 ">
        Ehtiyacınıza uyğun ixtisası asanlıqla tapın.
      </p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z">
        </path>
      </svg>
    </div>

    <!-- Kateqoriyalar -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
      <NuxtLink v-for="category in categories" :key="category.id"
        class="bg-card-light bg-primary dark:bg-card-dark p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
        :to="`/application/doctors?category=${category.id}`">

        <!-- Backendden gelen svg bu bizim onu rahatlıqla düzenlememiz lazımdır https://res.cloudinary.com/djfeqtwjx/image/upload/v1756282836/Tooth_elanf2.svg -->
        <img :src="category.image" alt="" class="w-12 h-12 object-contain" />
        <h3 class="text-md font-bold mt-4 text-white ">{{ category.title }}</h3>
      </NuxtLink>
    </div>

    <!-- Heç bir kateqoriya yoxdursa -->
    <p v-if="!loading && categories?.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-10">
      Kateqoriya tapılmadı.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import client, { type Categories } from '~/utils/client'


const categories = ref<Categories['data']>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const req = await client().GET('/doctor-categories')
    categories.value = req.data?.data ?? []
  } catch (err) {
    console.error('Kategoriya yüklənmədi:', err)
    categories.value = []
  } finally {
    loading.value = false
  }
})
</script>
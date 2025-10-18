<template>
    <main class="flex-grow container mx-auto px-6 py-12">
      <!-- Başlıq -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Həkimlərimiz
        </h1>
        <p
          class="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Sağlamlığınız üçün ən yaxşı mütəxəssisləri kəşf edin. Ehtiyaclarınıza
          uyğun həkimi asanlıqla tapın.
        </p>
      </div>
  
      <!-- Filter -->
      <div class="mb-8 p-4 bg-card-light dark:bg-card-dark rounded-xl shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <!-- Axtarış -->
          <div class="relative">
            <label
              for="search-doctor"
              class="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Həkim axtar
            </label>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-6"
            >
              <Icon name="mdi:magnify" class="text-gray-400" />
            </div>
            <input
              id="search-doctor"
              type="text"
              v-model="search"
              placeholder="Ad, soyad və ya ixtisas..."
              class="w-full mt-1 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
  
          <!-- İxtisas -->
          <div>
            <label
              for="specialization"
              class="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              İxtisas
            </label>
            <select
              id="specialization"
              v-model="specialization"
              class="w-full mt-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary py-2 px-3"
            >
              <option>Bütün ixtisaslar</option>
              <option>Kardioloq</option>
              <option>Pediatr</option>
              <option>Dermatoloq</option>
              <option>Nevroloq</option>
              <option>Ginekoloq</option>
              <option>Oftalmoloq</option>
            </select>
          </div>
  
          <!-- Filter düyməsi -->
          <button
            class="w-full md:w-auto bg-primary text-white font-bold py-2.5 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="mdi:filter-variant" />
            <span>Filterlə</span>
          </button>
        </div>
      </div>
  
      <!-- Həkim kartları -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="doctor in filteredDoctors"
          :key="doctor.name"
          class="bg-card-light dark:bg-card-dark rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <img
            :src="doctor.image"
            :alt="doctor.name"
            class="w-full h-56 object-cover"
          />
          <div class="p-5 flex flex-col flex-grow">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ doctor.name }}
              </h3>
              <div
                class="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full"
              >
                <Icon name="mdi:star" class="text-sm" />
                <span class="text-xs font-bold">{{ doctor.rating }}</span>
              </div>
            </div>
            <p class="text-sm text-primary font-semibold mb-4">
              {{ doctor.specialization }}
            </p>
            <button
              class="mt-auto w-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-sm font-bold py-2.5 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            >
              Ətraflı Bax
            </button>
          </div>
        </div>
      </div>
    </main>
  </template>

<script setup lang="ts">
import { ref, computed } from "vue";
definePageMeta({
  layout: "main",
});

const search = ref("");
const specialization = ref("Bütün ixtisaslar");

const doctors = ref([
  {
    name: "Dr. Leyla Əliyeva",
    specialization: "Kardioloq",
    rating: "4.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqF4aTg1-QeILQ02J5grgDuY5WX9VEItlHQBCdwvDx-NMsaI3l-DVDnzevPE1bm4xgzO1fWx2fhTJJXIi3Ju807P7hT2TWe_EuB7ZsipHlWHAkXRJ07Fu0Dnof9o-18ZsWjPUeRXaa6UTHQguak-PfMYIAwZfXXxyu7iTxX8gaazrqH1UBP6O7Tzh5u9jBdZWwl9v_-FueWJrZtc4rW7YElTY9h1uGIhTZ_3j1Ix_r9u92F8ndU5suESq50UaD82cdpjjCWmeFQHr",
  },
  {
    name: "Dr. Anar Məmmədov",
    specialization: "Pediatr",
    rating: "4.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUXM0uHw97Ed2LG8EchfqWk8TbvVOlyhkLnD_CIcqkC0BEIbMopBmt7QeXF-NRd9lnREE6aXU0OS0jBlOecPFbI5h2qYvdBpqhZrxAcc_QAT2OKwk3X2pkoHRvz--ztn7Gv4GGKPaU5PfAZ1NWGSmX1ozPQ7dw1pEHtFKJTaaSgOc_2i7vAXfumpTDhFeQha4CVFecjs3BXq7BP1Zrb6xFa6tonrnhUASww4me-99HJiljGEcsO7LKVCY9ha8YbH1ybhy0gKIfo4_9",
  },
  {
    name: "Dr. Nigar Quliyeva",
    specialization: "Dermatoloq",
    rating: "4.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpz79oydNm19qKKIYo4-FccDwrJ8wrl8CVKRUL32GFw0y-fXccMd0GJ_rM0GXxT0u5yhvvp0OtX0oUs3P6gY0SWGY9q_InxJ3FVMTA1gWEReuf_lJn6emnRZq-qHqvO1lH0PtJ9h8DzYeJP66x_oSfDRgeF6j8mVumFBRrsFdQpc-aN1PkF7X6NeaIu2pkHFAHoZyEPYq_9UVxd25-RjBPlsb2tyDTyrvSHV25NIsDA8nFK1vosIohiS73pft_695v8pE043k9-Oj-",
  },
  {
    name: "Dr. Rauf İsmayılov",
    specialization: "Nevroloq",
    rating: "4.7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANrEy3QnPtquBAXmi9eUodLu-Oq92-IVWgdAL-Vz46GX4zzLb-rz6UzJW0ZYQ7yj9PsFgdPOq2qkRAXTfXqunSpaOlfxBu7dzWkc0O8h4aM-e7r5lqKCQoEiEBp31xGxXAPvhjTr5zSN4jIIV36a4K33cLJqgZSOiQF0V1OBRZ2CqEJdeam31cxyCs3LcEke0ZOzleJqWcRoTPCWHT0gRFqSvkmEPjK2gAfcBXi0ruesrELAxKx0aUVjjmoX36zHRLGBNbT5wzmnLC",
  },
]);

const filteredDoctors = computed(() => {
  return doctors.value.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchesSpecialization =
      specialization.value === "Bütün ixtisaslar" ||
      doctor.specialization === specialization.value;
    return matchesSearch && matchesSpecialization;
  });
});
</script>

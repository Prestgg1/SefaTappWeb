<template>
    <div
      class="bg-background-light  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-primary/10"
    >
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900  mb-2">{{ title }}</h3>
        <p class="text-gray-600  text-sm mb-4">{{ description }}</p>
        <NuxtLink
          :to="link"
          class="inline-flex items-center text-primary font-bold text-sm group"
        >
          Daha Çox Oxu
          <svg
            class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    image: String,
    link: String
  })
  </script>
  
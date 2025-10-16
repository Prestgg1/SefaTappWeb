<template>
    <div class="flex items-center gap-4">
      <HeaderIconButton icon="mdi:bell-outline" />
      <HeaderIconButton icon="mdi:calendar-blank-outline" />
      <HeaderIconButton icon="mdi:heart-outline" />
  
      <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
  
      <button
        class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        @click="$emit('open-login')"
      >
        Daxil Ol
      </button>
  
      <button 
        @click="$emit('open-register')"
        class="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Qeydiyyatdan Keç
      </button>
    </div>
  </template>
  
  <script setup>
  import HeaderIconButton from './HeaderIconButton.vue'
  
  defineEmits(['open-login', 'open-register'])
  </script>
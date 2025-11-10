<template>
    <div
      v-if="type === 'incoming'"
      class="flex items-start gap-4"
    >
      <img :src="avatar" alt="incoming" class="w-10 h-10 rounded-full object-cover" />
      <div class="bg-gray-100  p-3 rounded-lg rounded-tl-none max-w-lg">
        <p class="text-sm text-gray-800 ">{{ message }}</p>
        <span class="text-xs text-gray-500 mt-2 block text-right">{{ formatTime(time) }}</span>
      </div>
    </div>
  
    <div
      v-else
      class="flex justify-end"
    >
      <div class="flex items-start gap-4 flex-row-reverse">
        <NuxtImg :src="avatar" alt="user" class="w-10 h-10 rounded-full object-cover" />
        <div class="bg-primary text-white p-3 rounded-lg rounded-tr-none max-w-lg">
          <p class="text-sm font-bold ">{{ message }}</p>
          <span class="text-xs text-amber-50 mt-2 block text-right">{{ formatTime(time) }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

  defineProps<{
    type: 'incoming' | 'outgoing'
    avatar: string
    message: string
    time: string
  }>()


  </script>
  
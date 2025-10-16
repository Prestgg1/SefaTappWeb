<template>
    <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
      <Icon
        :name="icon"
        class="text-gray-600 dark:text-gray-300"
      />
    </button>
  </template>
  
  <script setup>
  defineProps({
    icon: {
      type: String,
      required: true
    }
  })
  </script>
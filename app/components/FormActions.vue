<template>
    <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4">
      <button
        type="button"
        @click="$emit('cancel')"
        class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {{ cancelLabel }}
      </button>
      <button
        type="submit"
        class="w-full sm:w-auto px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition"
      >
        {{ submitLabel }}
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    cancelLabel: {
      type: String,
      default: 'Ləğv Et'
    },
    submitLabel: {
      type: String,
      default: 'Göndər'
    }
  })
  
  defineEmits(['cancel'])
  </script>
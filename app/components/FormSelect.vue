<template>
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ label }}
      </label>
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      >
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  defineProps({
    modelValue: String,
    label: String,
    options: Array
  })
  
  defineEmits(['update:modelValue'])
  </script>
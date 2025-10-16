<template>
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ label }}
      </label>
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        rows="3"
        class="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      ></textarea>
    </div>
  </template>
  
  <script setup>
  defineProps({
    modelValue: String,
    label: String,
    placeholder: String
  })
  
  defineEmits(['update:modelValue'])
  </script>
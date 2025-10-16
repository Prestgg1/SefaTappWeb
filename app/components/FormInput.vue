<template>
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ label }}
      </label>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        class="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    modelValue: [String, Number],
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  })
  
  defineEmits(['update:modelValue'])
  </script>
<template>
    <!-- Overlay -->
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="modelValue"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          @click.self="close"
        >
          <!-- Modal Box -->
          <transition name="scale">
            <div
              v-if="modelValue"
              class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 relative"
            >
              <!-- Close Button -->
              <button
                class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
                @click="close"
              >
                <Icon name="mdi:close" size="24" />
              </button>
  
              <!-- Header -->
              <div v-if="title" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {{ title }}
                </h2>
              </div>
  
              <!-- Default Slot -->
              <div class="text-gray-700 dark:text-gray-300">
                <slot />
              </div>
  
              <!-- Footer -->
              <div v-if="$slots.footer" class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-right">
                <slot name="footer" />
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    modelValue: { type: Boolean, required: true },
    title: { type: String, default: '' },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const close = () => emit('update:modelValue', false)
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .scale-enter-active, .scale-leave-active {
    transition: transform 0.2s ease;
  }
  .scale-enter-from, .scale-leave-to {
    transform: scale(0.95);
  }
  </style>
  
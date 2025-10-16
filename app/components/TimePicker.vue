<template>
      <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Saat seçin</h3>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="time in timeSlots"
                  :key="time.value"
                  @click="selectTime(time.value)"
                  :disabled="time.disabled"
                  :class="{
                    'bg-primary text-white': selectedTime === time.value,
                    'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600': selectedTime !== time.value && !time.disabled,
                    'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed': time.disabled
                  }"
                  class="py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {{ time.value }}
                </button>
              </div>
            </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['select-time'])

const selectedTime = ref<string | null>(null)
const timeSlots = ref([
    { value: '09:00', disabled: false },
    { value: '10:00', disabled: false },
    { value: '11:00', disabled: true },
    { value: '14:00', disabled: false },
    { value: '15:00', disabled: false },
    { value: '16:00', disabled: false }
  ])
  
  const selectTime = (time: string) => {
    selectedTime.value = time
    emit('select-time', time)
  }

</script>
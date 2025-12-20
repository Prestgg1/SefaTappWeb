<template>
    <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800  mb-3">
            Saat seçin
        </h3>

        <div class="grid grid-cols-3 gap-3">
            <button v-for="time in times" :key="time.label" :disabled="time.disabled" @click="selectTime(time.label)"
                class="py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                :class="timeClasses(time)">
                {{ time.label }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
    (e: 'select-time', value: string): void
}>()

const selectedTime = ref<string | null>(null)

const times = [
    { label: '09:00', disabled: false },
    { label: '10:00', disabled: false },
    { label: '11:00', disabled: true },
    { label: '14:00', disabled: false },
    { label: '15:00', disabled: false },
    { label: '16:00', disabled: false },
]

const selectTime = (time: string) => {
    selectedTime.value = time
    emit('select-time', time)
}

const timeClasses = (time: { label: string; disabled: boolean }) => {
    if (time.disabled) {
        return 'bg-gray-200 text-gray-400  cursor-not-allowed'
    }

    if (selectedTime.value === time.label) {
        return 'bg-primary text-white'
    }

    return 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}
</script>
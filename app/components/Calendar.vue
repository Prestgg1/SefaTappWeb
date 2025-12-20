<template>
    <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
            Tarix seçin
        </h3>

        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <!-- Header -->
            <div class="flex justify-between items-center mb-3">
                <button @click="prevMonth" :disabled="!canGoPrev" class="p-2 rounded-full transition" :class="canGoPrev
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    : 'opacity-40 cursor-not-allowed'">
                    <Icon name="mdi:chevron-left" />
                </button>

                <h4 class="font-bold text-gray-900 dark:text-white">
                    {{ monthLabel }}
                </h4>

                <button @click="nextMonth" :disabled="!canGoNext" class="p-2 rounded-full transition" :class="canGoNext
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    : 'opacity-40 cursor-not-allowed'">
                    <Icon name="mdi:chevron-right" />
                </button>
            </div>

            <!-- Weekdays -->
            <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span>B.e</span>
                <span>Ç.a</span>
                <span>Çər</span>
                <span>C.a</span>
                <span>Cüm</span>
                <span>Şən</span>
                <span>Baz</span>
            </div>

            <!-- Days -->
            <div class="grid grid-cols-7 gap-1">
                <div v-for="day in days" :key="day.toISOString()" class="flex justify-center items-center">
                    <button @click="selectDate(day)" :disabled="isDisabled(day)"
                        class="w-8 h-8 rounded-full text-sm transition-colors duration-200" :class="dayClasses(day)">
                        {{ day.getDate() }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{
    (e: 'select-date', value: Date): void
}>()

/* =========================
   DATE LIMITS
========================= */
const today = new Date()
today.setHours(0, 0, 0, 0)

const maxDate = new Date(today)
maxDate.setDate(maxDate.getDate() + 30)

/* =========================
   STATE
========================= */
const selectedDate = ref<string | null>(null)
const month = ref(today.getMonth())
const year = ref(today.getFullYear())
const days = ref<Date[]>([])

/* =========================
   HELPERS
========================= */
const getDaysInMonth = () => {
    const date = new Date(year.value, month.value, 1)
    const result: Date[] = []

    while (date.getMonth() === month.value) {
        result.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }

    days.value = result
}

const isBeforeToday = (date: Date) => {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    return d < today
}

const isAfterMaxDate = (date: Date) => {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    return d > maxDate
}

const isDisabled = (date: Date) =>
    isBeforeToday(date) || isAfterMaxDate(date)

/* =========================
   NAVIGATION
========================= */
const prevMonth = () => {
    if (!canGoPrev.value) return

    month.value--
    if (month.value < 0) {
        month.value = 11
        year.value--
    }
    getDaysInMonth()
}

const nextMonth = () => {
    if (!canGoNext.value) return

    month.value++
    if (month.value > 11) {
        month.value = 0
        year.value++
    }
    getDaysInMonth()
}

/* =========================
   COMPUTED
========================= */
const canGoPrev = computed(() => {
    const firstDayOfMonth = new Date(year.value, month.value, 1)
    return firstDayOfMonth > today
})

const canGoNext = computed(() => {
    const firstDayNextMonth = new Date(year.value, month.value + 1, 1)
    return firstDayNextMonth <= maxDate
})

const monthLabel = computed(() =>
    new Date(year.value, month.value).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
    })
)

const isToday = (date: Date) =>
    date.getTime() === today.getTime()

const isSelected = (date: Date) =>
    selectedDate.value === date.toISOString().slice(0, 10)

/* =========================
   ACTIONS
========================= */
const selectDate = (date: Date) => {
    if (isDisabled(date)) return

    selectedDate.value = date.toISOString().slice(0, 10)
    emit('select-date', date)
}

/* =========================
   CLASSES
========================= */
const dayClasses = (date: Date) => {
    if (isDisabled(date)) {
        return 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
    }

    if (isSelected(date)) {
        return 'bg-primary text-white'
    }

    if (isToday(date)) {
        return 'font-bold text-primary'
    }

    return 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
}

/* =========================
   INIT
========================= */
getDaysInMonth()
</script>
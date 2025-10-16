<template>
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Tarix seçin</h3>
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-3">
          <button @click="prevMonth" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Icon name="mdi:chevron-left" />
          </button>
          <h4 class="font-bold text-gray-900 dark:text-white">
            {{ currentMonthYear }}
          </h4>
          <button @click="nextMonth" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Icon name="mdi:chevron-right" />
          </button>
        </div>
  
        <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
          <span>B.e</span>
          <span>Ç.a</span>
          <span>Çər</span>
          <span>C.a</span>
          <span>Cüm</span>
          <span>Şən</span>
          <span>Baz</span>
        </div>
  
        <div class="grid grid-cols-7 gap-1">
          <div
            v-for="(day, index) in calendarDays"
            :key="index"
            class="flex justify-center items-center"
          >
            <button
              v-if="day"
              @click="selectDate(day)"
              :disabled="isPastDate(day)"
              :class="[
                'w-8 h-8 rounded-full text-sm transition-colors duration-200',
                isSelectedDate(day)
                  ? 'bg-primary text-white'
                  : isToday(day)
                  ? 'font-bold text-primary'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600',
                isPastDate(day) ? 'opacity-40 cursor-not-allowed hover:bg-transparent' : ''
              ]"
            >
              {{ day.getDate() }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits(['select-date'])
  const currentMonth = ref(new Date().getMonth())
  const currentYear = ref(new Date().getFullYear())
  const selectedDate = ref<Date | null>(null)
  
  const currentMonthYear = computed(() => {
    const date = new Date(currentYear.value, currentMonth.value)
    return date.toLocaleString('az', { month: 'long', year: 'numeric' })
  })
  
  // Təqvim günlərini yaratmaq
  const calendarDays = computed(() => {
    const firstDay = new Date(currentYear.value, currentMonth.value, 1)
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 // Bazar ertəsi = 0
    const days = []
  
    // Boş günlər əvvələ
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }
  
    // Ayın günləri
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentYear.value, currentMonth.value, i))
    }
  
    return days
  })
  
  // Əvvəlki ay
  const prevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }
  
  // Bu günü yoxlamaq
  const isToday = (day: Date) => {
    if (!day) return false
    const today = new Date()
    return (
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    )
  }
  
  // Seçilmiş tarixi yoxlamaq
  const isSelectedDate = (day: Date) => {
    if (!day || !selectedDate.value) return false
    return (
      day.getDate() === selectedDate.value.getDate() &&
      day.getMonth() === selectedDate.value.getMonth() &&
      day.getFullYear() === selectedDate.value.getFullYear()
    )
  }
  
  // Növbəti ay
  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }
  
  const selectDate = (day: Date) => {
    if (isPastDate(day)) return
    selectedDate.value = day
    emit('select-date', day)
  }
  
  const isPastDate = (day: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return day < today
  }
  </script>
  
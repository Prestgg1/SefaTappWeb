<template>
  <main class="flex-grow container mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-3 gap-8">

      <!-- Sol tərəf -->
      <div class="lg:col-span-2 space-y-8">

        <!-- Profil kartı -->
        <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-md p-6 relative overflow-hidden">
          
          <!-- Loading ekranı -->
          <transition name="fade">
            <div
              v-if="loading"
              class="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10"
            >
              <Icon name="eos-icons:bubble-loading" class="text-primary text-5xl animate-spin" />
              <p class="mt-3 text-gray-600 dark:text-gray-300">Yüklənir...</p>
            </div>
          </transition>

          <!-- Həkim məlumatları -->
          <div v-if="doctor" class="flex flex-col sm:flex-row items-start gap-6 animate-fade-in">
            <img 
              :alt="doctor.user.name" 
              class="w-32 h-32 rounded-full object-cover border-4 border-primary" 
              :src="doctor.user.image"
            />
            <div class="flex-1">
              <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">
                {{ doctor.user.name }}
              </h1>
              <p class="text-lg font-semibold text-primary mt-1">
                {{ doctor?.doctor_category?.title }}
              </p>
              <div class="flex items-center gap-4 mt-3 text-gray-500 dark:text-gray-400">
                <div class="flex items-center gap-1.5">
                  <Icon name="mdi:star" class="text-yellow-500"/>
                  <span class="font-bold text-gray-700 dark:text-gray-200">{{ doctor.average_rating }}</span>
                  <span class="text-sm">({{ doctor?.total_reviews }} rəy)</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <Icon name="mdi:verified-user" class="text-primary"/>
                  <span class="text-sm">Təsdiqlənmiş profil</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Haqqında -->
          <div v-if="doctor" class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 animate-fade-in-delay">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Haqqında</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ doctor?.abouts }}</p>
          </div>
        </div>

        <!-- Rəylər -->
        <Reviews v-if="!loading"  :doctorId="Number(route.params.id)" />
      </div>

      <!-- Sağ tərəf -->
      <div class="lg:col-span-1">
        <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-md p-6 sticky top-28">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Rezervasiya</h2>
          
          <Calendar @select-date="selectedDate = $event" />
          <TimePicker @select-time="selectedTime = $event" />

          <button 
            @click="confirmBooking"
            :disabled="!selectedDate || !selectedTime"
            class="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Rezervasiyanı Təsdiqlə
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import client from "~/utils/useApi"
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"

definePageMeta({ layout: "main" })

const route = useRoute()
const doctor = ref<any>(null)
const loading = ref(true)
const selectedDate = ref<Date | null>(null)
const selectedTime = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    const res = await client.GET("/api/doctors/{doctor_id}", {
      params: { path: { doctor_id: Number(route.params.id) } },
    })
    if (res.data) doctor.value = res.data
  } catch (err) {
    console.error("Doctor fetch error:", err)
  } finally {
    loading.value = false
  }
})

const confirmBooking = () => {
  if (selectedDate.value && selectedTime.value) {
    const dateStr = selectedDate.value.toLocaleDateString("az")
    alert(`Rezervasiya təsdiqləndi:\nTarix: ${dateStr}\nSaat: ${selectedTime.value}`)
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
.animate-fade-in-delay {
  animation: fade-in 0.7s ease-out;
}
</style>

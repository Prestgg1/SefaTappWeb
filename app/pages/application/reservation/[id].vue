<template>
  <main class="grow container mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-3 gap-8">

      <!-- Sol tərəf -->
      <div class="lg:col-span-2 space-y-8">

        <!-- Profil kartı -->
        <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-md p-6 relative overflow-hidden">

          <!-- Loading ekranı -->
          <transition name="fade">
            <div v-if="loading"
              class="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10">
              <Icon name="eos-icons:bubble-loading" class="text-primary text-5xl animate-spin" />
              <p class="mt-3 text-gray-600 dark:text-gray-300">Yüklənir...</p>
            </div>
          </transition>

          <!-- Həkim məlumatları -->
          <div v-if="doctor" class="flex flex-col sm:flex-row items-start gap-6 animate-fade-in">
            <img :alt="doctor.user.name" class="w-32 h-32 rounded-full object-cover border-4 border-primary"
              :src="doctor.user.image" />
            <div class="flex-1">
              <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">
                {{ doctor.user.name }}
              </h1>
              <p class="text-lg font-semibold text-primary mt-1">
                {{ doctor?.category?.title }}
              </p>
              <div class="flex items-center gap-4 mt-3 text-gray-500 dark:text-gray-400">
                <div class="flex items-center gap-1.5">
                  <Icon name="mdi:star" class="text-yellow-500" />
                  <span class="font-bold text-gray-700 dark:text-gray-200">{{ doctor.average_rating }}</span>
                  <span class="text-sm">({{ doctor?.total_reviews }} rəy)</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <Icon name="mdi:verified-user" class="text-primary" />
                  <span class="text-sm">Təsdiqlənmiş profil</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Haqqında -->
          <div v-if="doctor" class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 animate-fade-in-delay">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Haqqında</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ doctor?.about }}</p>
          </div>
        </div>

        <!-- Rəylər -->
        <Reviews v-if="!loading" :doctorId="Number(route.params.id)" />
      </div>

      <!-- Sağ tərəf -->
      <div class="lg:col-span-1">
        <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-md p-6 sticky top-28">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Rezervasiya</h2>

          <Calendar @select-date="selectedDate = $event" />
          <TimePicker @select-time="selectedTime = $event" />
          <UModal v-model:open="isConfirmOpen" prevent-close>
            <UButton :disabled="!selectedDate || !selectedTime" label="Rezervasiyanı Təsdiqlə" color="primary"
              class="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              variant="solid" />

            <template #content>
              <div class="p-0 sm:p-10">

                <div class="text-center space-y-1">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Rezervasiyanı tamamla</h2>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">
                    Zəhmət olmasa aşağıdakı məlumatları doldurun
                  </p>
                </div>

                <UForm :state="form" class="space-y-5 mt-5">
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Ad və Soyad
                    </label>
                    <UInput v-model="form.full_name" placeholder="Məs: Səbuhi Sariyev" size="lg"
                      class="rounded-xl w-full" />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Telefon nömrəsi
                    </label>
                    <UInput v-model="form.phone" placeholder="+994 50 123 45 67" size="lg" class="rounded-xl w-full" />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      FIN kod
                    </label>
                    <UInput v-model="form.fin_code" maxlength="7" placeholder="7 simvollu FIN kod" size="lg"
                      class="rounded-xl w-full" />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Şikayət
                    </label>
                    <UTextarea v-model="form.complaint" placeholder="Qısaca şikayətinizi yazın..." :rows="3"
                      class="rounded-xl w-full" />
                  </div>

                  <div class="pt-2 flex justify-end">
                    <UButton color="primary" size="lg" type="submit" :leading="true"
                      class="w-full text-center bg-primary text-white font-semibold rounded-xl py-3 shadow-md hover:shadow-lg transition-all duration-300"
                      @click="submitReservation">
                      <template #leading>
                        <div class="flex items-center justify-center w-full gap-2">
                          <Icon name="mdi:check" />
                          Təsdiqlə
                        </div>

                      </template>
                    </UButton>
                  </div>
                </UForm>
              </div>
            </template>
          </UModal>


        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"
import Calendar from "~/components/Calendar.vue"
import TimePicker from "~/components/TimePicker.vue"
const toast = useToast()
const isLoading = ref(false)
const isConfirmOpen = ref(false)
const form = ref({
  full_name: "",
  phone: "",
  fin_code: "",
  complaint: "",
})

definePageMeta({ layout: "main" })

const route = useRoute()
const doctor = ref<any>(null)
const loading = ref(true)
const selectedDate = ref<Date | null>(null)
const selectedTime = ref<string | null>(null)

onMounted(async () => {
  try {
    loading.value = true
    const res = await client().GET("/doctors/{doctorId}", {
      params: { path: { doctorId: Number(route.params.id) } },
    })
    if (res.data) doctor.value = res.data
  } catch (err) {
    console.error("Doctor fetch error:", err)
  } finally {
    loading.value = false
  }
})

const submitReservation = async () => {
  if (selectedDate.value && selectedTime.value) {
    const dateStr = selectedDate.value.toISOString().split("T")[0]
    isLoading.value = true
    const req = await client().POST("/appointments/{modelType}/{modelId}", {
      params: {
        path: {
          modelType: "doctor",
          modelId: Number(route.params.id),
        }
      },
      body: {
        full_name: form.value.full_name,
        phone: form.value.phone,
        fin_code: form.value.fin_code,
        complaint: form.value.complaint,
        date: dateStr || "",
      },
    })
    /* TODO: Buraya bax. */
    if (req.error && req.error) {
      if (typeof req.error.message === "string") {
        toast.add({
          title: "Xəta",
          description: req.error.message,
          color: "error",
        })
      }
      else {
        for (const key in req.error) {
          /*  toast.add({
             title: "Xəta",
             description: req.error[key]
             color: "error",
           }) */
        }
      }
    }
    else {
      toast.add({
        title: "Məlumatlar yadda saxlanıldı",
        description: "Rezervasiyanız göndərildi",
        color: "success",
      })
    }

    isConfirmOpen.value = false
    form.value = {
      full_name: "",
      phone: "",
      fin_code: "",
      complaint: "",
    }
    isLoading.value = false
  }
}
</script>


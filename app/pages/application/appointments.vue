<template>
    <main class="grow container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 class="text-3xl font-extrabold text-gray-900">Rezervasiyalarım</h1>
            <p class="text-gray-500 mt-1">Bütün həkim qəbullarınızı buradan idarə edin.</p>
          </div>
          <div class="flex items-center gap-3">
            <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <Icon name="mdi:filter-outline" class="text-[20px]" />
              Filtr
            </button>
            
          </div>
        </div>
  
        <!-- Loading -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 3" :key="i" class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 animate-pulse">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-xl bg-gray-200"></div>
                <div class="space-y-2">
                  <div class="h-5 bg-gray-200 rounded w-40"></div>
                  <div class="h-4 bg-gray-200 rounded w-24"></div>
                  <div class="h-3 bg-gray-200 rounded w-48"></div>
                </div>
              </div>
              <div class="flex flex-col items-start md:items-end gap-2">
                <div class="h-6 bg-gray-200 rounded-full w-24"></div>
                <div class="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div class="mt-4 flex justify-end gap-3">
              <div class="h-4 bg-gray-200 rounded w-16"></div>
              <div class="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
  
        <!-- Rezervasiyalar -->
        <div v-else class="space-y-4">
          <div
            v-for="rezervasiya in rezervasiyalar"
            :key="rezervasiya.id"
            class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
            :class="{
              'opacity-75 grayscale-[0.3]': rezervasiya.status === 'cancelled'
            }"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div 
                  class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  :class="rezervasiya.status === 'cancelled' ? 'bg-gray-100' : 'bg-primary/10'"
                >
                  <Icon 
                    name="mdi:account-outline" 
                    class="text-3xl"
                    :class="rezervasiya.status === 'cancelled' ? 'text-gray-400' : 'text-primary'"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg">{{ rezervasiya.user.name }}</h3>
                  <p class="text-sm text-primary font-medium">{{ rezervasiya.doctor_category.title }}</p>
                  <div class="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Icon name="mdi:clock-outline" class="text-[16px]" />
                    <span>Yaradıldı: {{ formatTime(rezervasiya.created_at) }}</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-start md:items-end gap-2">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="getStatusClass(rezervasiya.status)"
                >
                  {{ getStatusText(rezervasiya.status) }}
                </span>
                <div 
                  class="flex items-center gap-1 text-sm font-semibold"
                  :class="rezervasiya.status === 'cancelled' ? 'text-gray-500 line-through' : 'text-gray-700'"
                >
                  <Icon name="mdi:calendar-outline" class="text-[18px]" />
                  {{ formatTime(rezervasiya.date) }}
                </div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <p class="text-sm text-gray-600">
                <span class="font-semibold text-gray-800">Şikayət:</span> 
                {{ rezervasiya.complaint }}
              </p>
            </div>
            <div class="mt-4 flex justify-end gap-3">
              <template v-if="rezervasiya.status !== 'cancelled'">
              <!--   <button class="text-sm font-medium text-gray-500 hover:text-gray-700">Detallar</button> -->
              </template>
              <template v-else>
                <button class="text-sm font-medium text-primary hover:underline">Yenidən sifariş et</button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  

  definePageMeta({ layout: 'main' })


  
  const loading = ref(true);
  const rezervasiyalar = ref<Appointments>([]);



    const cancelAppointment = async (id: string) => {
        console.log(id)
      await useApi().PUT("/appointments/cancel/{appointmentId}",{
        params: {
            path: {
                appointmentId: id
            }
        },
        body: {
            reason: 'Ləğv etildi'
        }
      }).then(() => {
        rezervasiyalar.value = rezervasiyalar.value.filter((rezervasiya) => rezervasiya.id !== id)
      }).catch(err => {
        console.log(err)
      })
    }

  const getStatusClass = (status) => {
    const classes = {
      accepted: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      cancelled: 'bg-red-100 text-red-700'
    };
    return classes[status] || '';
  };
  
  const getStatusText = (status) => {
    const texts = {
      accepted: 'Təsdiqləndi',
      pending: 'Gözləmədə',
      cancelled: 'Ləğv edildi'
    };
    return texts[status] || '';
  };
  
  onMounted(() => {

    useApi().GET('/appointments/doctor').then(res => {
      rezervasiyalar.value = res.data?.data;
      console.log(res.data?.data)
      loading.value = false;
    })
 /*    setTimeout(() => {
      rezervasiyalar.value = mockData;
      loading.value = false;
    }, 1500); */
  });
  </script>
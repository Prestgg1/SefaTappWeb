<template>
    <div class="relative">
      <!-- Loader -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
        <div v-for="i in 4" :key="i" class="bg-card-light border dark:bg-card-dark   rounded-xl h-72"></div>
      </div>
  
      <!-- Carousel -->
      <div v-else>
        <button class="swiper-button-custom prev">
          <Icon name="mdi:chevron-left" class="text-3xl" />
        </button>
        <button class="swiper-button-custom next">
          <Icon name="mdi:chevron-right" class="text-3xl" />
        </button>
  
        <Swiper
          style="--swiper-pagination-color: #0d9488"
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="16"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }"
          :navigation="{
            nextEl: '.next',
            prevEl: '.prev',
          }"
          :pagination="{ clickable: true }"
          class="pb-12"
        >
          <SwiperSlide v-for="doctor in doctors" :key="doctor.id">
            <DoctorCart :doctor="doctor"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper/modules'
  import client from '@/utils/useApi'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import type { Doctors } from '@/utils/useApi'
  
  const doctors = ref<Doctors>([])
  const loading = ref(true)
  
  onMounted(async () => {
    try {

      const req = await useServer().GET("/api/doctors/")
      doctors.value = (req.data ?? []) as Doctors
      console.log(doctors.value)
    } catch (error) {
      console.log(error)
    } 
    
    finally {
      loading.value = false
    }
  })
  </script>
  
  <style scoped>
  .swiper-button-custom {
    position: absolute;
    top: 40%;
    z-index: 20;
    transform: translateY(-50%);
    background-color: rgba(13, 148, 136, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 9999px;
    color: #0d9488;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .swiper-button-custom:hover {
    background-color: rgba(13, 148, 136, 0.3);
    transform: translateY(-50%) scale(1.1);
  }
  .swiper-button-custom.prev {
    left: -2rem;
  }
  .swiper-button-custom.next {
    right: -2rem;
  }
  </style>
  
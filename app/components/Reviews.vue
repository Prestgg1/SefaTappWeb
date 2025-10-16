<template>
    <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-md p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Rəylər</h2>
      
      <!-- Rəylər Listesi -->
      <div class="space-y-6">
        <div 
          v-for="(review, index) in displayedReviews" 
          :key="review.id"
          :class="{'border-b border-gray-200 dark:border-gray-700 pb-6': index < displayedReviews.length - 1}"
        >
          <div class="flex items-start gap-4">
            <img 
              :alt="review.author.name"
              class="w-12 h-12 rounded-full object-cover"
              :src="review.author.image"
            />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-gray-800 dark:text-gray-100">{{ review.author.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ review.created_at }}</p>
                </div>
                <div class="flex items-center gap-0.5">
                  <span 
                    v-for="star in 5" 
                    :key="star"
                    class="text-base"
                    :class="star <= review.rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'"
                  >
                    ★
                  </span>
                </div>
              </div>
              <p class="mt-3 text-gray-600 dark:text-gray-300">{{ review.review }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Əlavə Rəylər (Animasyonlu) -->
      <div
        ref="expandableContent"
        class="overflow-hidden transition-all duration-500"
        :style="{ maxHeight: isExpanded ? expandableContent?.scrollHeight + 'px' : '0px' }"
      >
        <div v-if="allReviews.length > 0" class="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div 
            v-for="(review, index) in allReviews" 
            :key="review.id"
            :class="{'border-b border-gray-200 dark:border-gray-700 pb-6': index < allReviews.length - 1}"
          >
            <div class="flex items-start gap-4">
              <img 
                :alt="review.author.name"
                class="w-12 h-12 rounded-full object-cover"
                :src="review.author.image"
              />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-semibold text-gray-800 dark:text-gray-100">{{ review.author.name }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ review.created_at }}</p>
                  </div>
                  <div class="flex items-center gap-0.5">
                    <span 
                      v-for="star in 5" 
                      :key="star"
                      class="text-base"
                      :class="star <= review.rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'"
                    >
                      ★
                    </span>
                  </div>
                </div>
                <p class="mt-3 text-gray-600 dark:text-gray-300">{{ review.review }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Xəta Mesajı -->
      <div v-if="error" class="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm">
        ⚠️ {{ error }}
      </div>
  
      <!-- Bütün Rəyləri Göstər Butonu -->
      <div v-if="!isExpanded && reviews.length > 2" class="mt-6 text-center">
        <button
          @click="loadAllReviews"
          :disabled="isLoading"
          class="text-primary font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          <span v-if="isLoading" class="inline-flex items-center gap-2">
            <span class="animate-spin">⏳</span>
            Yüklənir...
          </span>
          <span v-else>Bütün rəyləri göstər</span>
        </button>
      </div>
      <div v-else>
      <p class="text-gray-500 dark:text-gray-400">Hal hazırda rəy yoxdur</p>
    </div>
    </div>
  
  </template>
  
  <script setup lang="ts">
  import { ref, computed, nextTick, onMounted } from 'vue'
import client from '~/utils/useApi'
import type { Reviews } from '~/utils/useApi'
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const props = defineProps({
    doctorId: {
      type: Number,
      required: true,
    },
  })
   const reviews = ref<Reviews>([])

   onMounted(async () => {
    try {
      const req = await client.GET('/api/reviews/{model}/{model_id}',{
        params:{
          path:{
            model:"doctor",
            model_id:props.doctorId
          }
        }
      })
      reviews.value = req.data ?? []
    } catch (err) {
      console.error('Rəylər yüklənmədi:', err)
      reviews.value = []
      error.value = 'Rəylər yüklənmədi'
    }
  })

  const allReviews = ref<Reviews>([])
    const isExpanded = ref(false)
   const expandableContent = ref<HTMLElement | null>(null)

    const displayedReviews = computed(() => {
    return reviews.value
  })

  const loadAllReviews = async () => {
    try {
      isLoading.value = true
      // If there were pagination or a different endpoint for all reviews, call it here.
      // For now, simply expand the section to reveal `allReviews` (if populated elsewhere).
      isExpanded.value = true
    } catch (e) {
      console.error(e)
      error.value = 'Rəylər yüklənmədi'
    } finally {
      isLoading.value = false
      await nextTick()
    }
  }


  </script>
  
  <style scoped>
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  
  .duration-500 {
    transition-duration: 500ms;
  }
  </style>
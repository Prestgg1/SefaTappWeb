<template>
    <section class="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- Video Container -->
        <div class="relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-6xl mx-auto">
          <!-- Video Thumbnail -->
          <img
            alt="Promotional video thumbnail"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZqF4aTg1-QeILQ02J5grgDuY5WX9VEItlHQBCdwvDx-NMsaI3l-DVDnzevPE1bm4xgzO1fWx2fhTJJXIi3Ju807P7hT2TWe_EuB7ZsipHlWHAkXRJ07Fu0Dnof9o-18ZsWjPUeRXaa6UTHQguak-PfMYIAwZfXXxyu7iTxX8gaazrqH1UBP6O7Tzh5u9jBdZWwl9v_-FueWJrZtc4rW7YElTY9h1uGIhTZ_3j1Ix_r9u92F8ndU5suESq50UaD82cdpjjCWmeFQHr"
          />
  
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/50 via-black/20 to-black/10 flex items-center justify-center transition-colors hover:bg-black/40">
            <!-- Play Button -->
            <button
              class="group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-teal-600/90 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25"
              @click="handlePlay"
              aria-label="Play video"
            >
              <Icon name="mdi:play" class="group-hover:scale-110 transition-transform text-3xl sm:text-4xl lg:text-5xl group-hover:scale-110 transition-transform ml-1" />
            </button>
          </div>
  
          <!-- Video Title Overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/70 to-transparent">
            <h3 class="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              ŞefaTapp Tanıtım Videosu
            </h3>
            <p class="text-gray-200 text-sm sm:text-base opacity-90">
              Sağlamlıq təcrübənizin gələcəyini kəşf edin
            </p>
          </div>
  
          <!-- Loading State (when video is playing) -->
          <div v-if="isPlaying" class="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div class="flex flex-col items-center gap-4">
              <div class="animate-spin rounded-full h-12 w-12 border-4 border-teal-400 border-t-transparent"></div>
              <p class="text-white text-sm">Video yüklənir...</p>
            </div>
          </div>
        </div>
  
        <!-- Video Description -->
        <div class="text-center mt-8 lg:mt-12 max-w-2xl mx-auto">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ŞefaTapp ilə Tanış Olun
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Sağlamlıq xidmətlərinin gələcəyini əlinizdə daşıyın. ŞefaTapp ilə həkimlərinizə, süni intellekt köməkçimizə və sağlamlıq məhsullarına rahatlıqla giriş əldə edin.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isPlaying = ref(false)
  
  const handlePlay = () => {
    isPlaying.value = true
    console.log('Video playing...')
  }
  </script>
  
  <style scoped>
  /* Əgər lazım olsa, əlavə style-lar buraya əlavə edilə bilər */
  </style>
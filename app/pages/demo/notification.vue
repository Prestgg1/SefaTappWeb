<template>
    <main class="flex-grow container mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div class="max-w-3xl mx-auto">
        <!-- Başlıq və Əməliyyatlar -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">Bildirişlər</h1>
  
          <div class="flex items-center gap-4">
            <button
              class="text-sm font-medium text-primary hover:underline whitespace-nowrap"
            >
              Hamısını oxunmuş kimi işarələ
            </button>
            <button
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon name="mdi:settings" class="text-gray-600 dark:text-gray-300"/>
            </button>
          </div>
        </div>
  
        <!-- Bildirişlər siyahısı -->
        <div class="bg-white dark:bg-card-dark rounded-xl shadow-md">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <!-- Bildiriş 1 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer relative"
            >
              <div
                class="w-2.5 h-2.5 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 left-3 sm:left-4"
              ></div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center ml-5"
              >
                <Icon name="mdi:calendar-blank-outline" class="text-blue-600 dark:text-blue-300"/>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-800 dark:text-gray-100">
                  Görüş xatırlatması
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Dr. Leyla Əliyeva ilə olan görüşünüz sabah saat 10:00-dadır.
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">5 dəq əvvəl</p>
              </div>
            </li>
  
            <!-- Bildiriş 2 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer relative"
            >
              <div
                class="w-2.5 h-2.5 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 left-3 sm:left-4"
              ></div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center ml-5"
              >
                <Icon name="mdi:chat" class="text-green-600 dark:text-green-300"/>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-800 dark:text-gray-100">
                  Yeni mesaj
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Dr. Elvin Quliyev sizə yeni bir mesaj göndərdi.
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">1 saat əvvəl</p>
              </div>
            </li>
  
            <!-- Bildiriş 3 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center ml-5"
              >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-6 h-6 text-purple-600 dark:text-purple-300"
  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
>
  <path d="M22 2l-1.5 1.5-1.09-1.09-1.41 1.41 1.09 1.09L17 6l-2-2-1.5 1.5 2 2L6 17v3h3l9.5-9.5 2 2L22 11l-2-2 1.5-1.5-1.41-1.41L22 2zM8 19H7v-1l8.06-8.06 1 1L8 19z"/>
</svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-500 dark:text-gray-400">
                  Reçetə təsdiqləndi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Aptek sifarişiniz təsdiqləndi və hazırlanır.
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">3 saat əvvəl</p>
              </div>
            </li>
  
            <!-- Bildiriş 4 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center ml-5"
              >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-6 h-6 text-yellow-600 dark:text-yellow-300"
  viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
>
  <path d="M22 2l-1.5 1.5-1.09-1.09-1.41 1.41 1.09 1.09L17 6l-2-2-1.5 1.5 2 2L6 17v3h3l9.5-9.5 2 2L22 11l-2-2 1.5-1.5-1.41-1.41L22 2zM8 19H7v-1l8.06-8.06 1 1L8 19z"/>
</svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-500 dark:text-gray-400">
                  Sistem yenilənməsi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Tətbiq yeni funksiyalarla yeniləndi. İndi yoxlayın!
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">Dünən</p>
              </div>
            </li>
  
            <!-- Bildiriş 5 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center ml-5"
              >
                <Icon name="mdi:error" class="text-red-600 dark:text-red-300"/>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-500 dark:text-gray-400">
                  Ödəniş uğursuz oldu
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Sonuncu rezervasiya üçün ödənişiniz uğursuz oldu. Zəhmət olmasa, ödəniş məlumatlarınızı yoxlayın.
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">2 gün əvvəl</p>
              </div>
            </li>
  
            <!-- Bildiriş 6 -->
            <li
              class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center ml-5"
              >
                <Icon name="mdi:calendar-blank-outline" class="text-blue-600 dark:text-blue-300"/>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-500 dark:text-gray-400">
                  Görüş təsdiqləndi
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Dr. Aysel Məmmədova ilə olan görüşünüz 25 Aprel saat 14:30-a təsdiqləndi.
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 dark:text-gray-400">3 gün əvvəl</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
definePageMeta({
  layout: 'main'
})

</script>
  
  <style scoped>
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
  }
  </style>
  
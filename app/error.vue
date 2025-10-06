<template>
    <main
      class="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200"
    >
      <div class="container mx-auto px-6 py-16 text-center">
        <div class="max-w-md mx-auto">
          <div class="text-primary font-black text-9xl">404</div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Səhifə tapılmadı
          </h1>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Görünür, axtardığınız səhifə mövcud deyil və ya başqa yerə köçürülüb.
          </p>
  
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="/"
              class="w-full bg-teal-600 sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Ana Səhifəyə Qayıt
            </NuxtLink>
  
            <NuxtLink
              to="/#support"
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Bizimlə Əlaqə
            </NuxtLink>
          </div>
  
          <div class="mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>Bəlkə bu keçidlərdən biri kömək edər?</p>
            <div class="flex justify-center gap-6 mt-4">
              <NuxtLink to="/blogs" class="hover:text-primary transition-colors">Bloglar</NuxtLink>
              <span class="text-gray-300 dark:text-gray-600">|</span>
              <NuxtLink to="/#faq" class="hover:text-primary transition-colors">FAQ</NuxtLink>
              <span class="text-gray-300 dark:text-gray-600">|</span>
              <NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors">Məxfi Məlumat Siyasəti</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  
  useHead({
    title: "ŞefaTapp - Səhifə Tapılmadı",
    meta: [
      { name: "description", content: "Axtardığınız səhifə tapılmadı və ya başqa yerə köçürülüb." }
    ]
  })
  
  </script>
  


  <style scoped>
  .font-display {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  
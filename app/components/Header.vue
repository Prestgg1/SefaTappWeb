<template>
  <header class="sticky top-0 z-50 bg-white/80  backdrop-blur-sm border-b border-gray-200  transition-colors">
    <div class="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <Logo />
        <h2 class="text-xl font-bold text-gray-900 ">ŞafaTapp</h2>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/#home"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          Ana Səhifə
        </NuxtLink>
        <NuxtLink to="/#features"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          Xüsusiyyətlər
        </NuxtLink>
        <NuxtLink to="/#support"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          Dəstək
        </NuxtLink>
        <NuxtLink to="/blogs"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Bloglar
        </NuxtLink>
        <NuxtLink to="/privacy-policy"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Məxfi Məlumat Siyasəti
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle -->

        <!-- Download Button -->
        <button @click="downloadApp"
          class="hidden md:block bg-teal-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors">
          Tətbiqi Yüklə
        </button>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 text-gray-600  hover:text-teal-600 dark:hover:text-teal-400"
          @click="showMobileMenu = !showMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="showMobileMenu"
      class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-4">
        <NuxtLink to="/#home" @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Ana Səhifə
        </NuxtLink>
        <NuxtLink to="/#features" @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Xüsusiyyətlər
        </NuxtLink>
        <NuxtLink to="/#support" @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Dəstək
        </NuxtLink>
        <NuxtLink to="/blogs" @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Bloglar
        </NuxtLink>
        <NuxtLink to="/privacy-policy" @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2">
          Məxfi Məlumat Siyasəti
        </NuxtLink>

        <!-- Mobile Theme Switcher -->


        <button @click="downloadApp"
          class="bg-teal-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors w-full mt-2">
          Tətbiqi Yüklə
        </button>
      </nav>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade">
        <div class="bg-white  rounded-2xl shadow-xl max-w-md w-full p-8 text-center animate-pop">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Seçdiyiniz üçün təşəkkürlər 🎉
          </h2>
          <p class="text-gray-600 ">Yükləmə avtomatik başladı...</p>
        </div>
      </div>
    </Teleport>
  </header>

</template>

<script setup lang="ts">
import Logo from './Logo.vue'


const showMobileMenu = ref(false)
const showModal = ref(false)
const downloadApp = () => {
  window.location.href =
    "https://github.com/Prestgg1/FlutterApp/releases/download/Android/app-release.apk"
  showModal.value = true
  setTimeout(() => (showModal.value = false), 3000)
}




</script>

<style scoped>
@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes pop {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade {
  animation: fade 0.3s ease-out;
}

.animate-pop {
  animation: pop 0.4s ease-out;
}
</style>
<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors"
  >
    <div class="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <svg
          class="h-8 w-8 text-teal-600"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_535)">
            <path
              clip-rule="evenodd"
              d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_535">
              <rect fill="white" height="48" width="48" />
            </clipPath>
          </defs>
        </svg>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">ŞefaTapp</h2>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          to="/#home"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Ana Səhifə
        </NuxtLink>
        <NuxtLink
          to="/#features"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Xüsusiyyətlər
        </NuxtLink>
        <NuxtLink
          to="/#support"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Dəstək
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Bloglar
        </NuxtLink>
        <NuxtLink
          to="/privacy-policy"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Məxfi Məlumat Siyasəti
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? 'Aydın rejimə keç' : 'Qaranlıq rejimə keç'"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-5 h-5 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1.5M12 19.5V21M4.219 4.219l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7.5a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-5 h-5 text-gray-700 dark:text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0112 21a9.718 9.718 0 01-9.752-5.998A9.719 9.719 0 0112 3a9.719 9.719 0 019.752 12.002Z"
            />
          </svg>
        </button>

        <!-- Download Button -->
        <button
          @click="downloadApp"
          class="hidden md:block bg-teal-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Tətbiqi Yüklə
        </button>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="showMobileMenu"
      class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-4">
        <NuxtLink
          to="/#home"
          @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Ana Səhifə
        </NuxtLink>
        <NuxtLink
          to="/#features"
          @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Xüsusiyyətlər
        </NuxtLink>
        <NuxtLink
          to="/#support"
          @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Dəstək
        </NuxtLink>
        <NuxtLink
          to="/blogs"
          @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Bloglar
        </NuxtLink>
        <NuxtLink
          to="/privacy-policy"
          @click="showMobileMenu = false"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
        >
          Məxfi Məlumat Siyasəti
        </NuxtLink>

        <!-- Mobile Theme Switcher -->
        <button
          @click="toggleTheme"
          class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-5 h-5 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1.5M12 19.5V21M4.219 4.219l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7.5a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-5 h-5 text-gray-700 dark:text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0112 21a9.718 9.718 0 01-9.752-5.998A9.719 9.719 0 0112 3a9.719 9.719 0 019.752 12.002Z"
            />
          </svg>
          {{ isDark ? 'Aydın rejimə keç' : 'Qaranlıq rejimə keç' }}
        </button>

        <button
          @click="downloadApp"
          class="bg-teal-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors w-full mt-2"
        >
          Tətbiqi Yüklə
        </button>
      </nav>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade"
      >
        <div
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8 text-center animate-pop"
        >
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Seçdiyiniz üçün təşəkkürlər 🎉
          </h2>
          <p class="text-gray-600 dark:text-gray-400">Yükləmə avtomatik başladı...</p>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showMobileMenu = ref(false)
const showModal = ref(false)
const isDark = ref(false)

const downloadApp = () => {
  window.location.href =
    "https://github.com/Prestgg1/FlutterApp/releases/download/Android/app-release.apk"
  showModal.value = true
  setTimeout(() => (showModal.value = false), 3000)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes pop {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fade { animation: fade 0.3s ease-out; }
.animate-pop { animation: pop 0.4s ease-out; }
</style>

<template>
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
</template>

<script setup lang="ts">
const isDark = ref(false)
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
   console.log('dark')
   document.documentElement.classList.add('dark')
 }
})

</script>
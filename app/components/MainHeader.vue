<template>
    <header class="sticky top-0 z-50   bg-white/80  backdrop-blur-sm border-b border-gray-200 ">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
            />
          </svg>
          <NuxtLink to="/demo">
            <h2 class="text-xl font-bold text-gray-900">ŞefaTapp</h2>
          </NuxtLink>
        </div>
  
        <!-- Nav -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="/application/doctors" class="nav-link">Həkimlər</NuxtLink>
          <NuxtLink to="/application/ai" class="nav-link">AI Dəstək</NuxtLink>
          <NuxtLink to="/application/reservations" class="nav-link">Rezervasiyalar</NuxtLink>
        </nav>
       
        <!-- Actions -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/application/notifications" class="icon-btn"><Icon name="mdi:bell-outline" /></NuxtLink>
          <NuxtLink to="/application/favorites" class="icon-btn"><Icon name="mdi:heart-outline" /></NuxtLink>
          <UDropdownMenu v-if="user" :items="items">
          <div  class="flex items-center gap-3">
            <img
              :src="user.image || '/default-avatar.png'"
              alt="Avatar"
              class="w-9 h-9 rounded-full object-cover"
            />
            <span class="font-medium text-gray-900">{{ user.name }}</span>
          </div>
          </UDropdownMenu>
   <template v-if="!user">

    <NuxtLink to="/application/login" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Daxil Ol</NuxtLink>
<NuxtLink to="/application/register" as="button" class="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                        Qeydiyyatdan Keç
</NuxtLink>
       
   </template>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import type { User } from '~/utils/client';
  
  const emit = defineEmits<{ close: [boolean] }>()
  const isOpenLogin = ref(false)
  const token = useCookie("token")
  const isOpen = ref(false)
  const user = useState<User | null>("user", () => null)
  const items = [
    {
      label: 'Profil',
      icon: 'mdi:account',
      to: '/application/profile'
    },
    {
      label: 'Çıxış',
      icon: 'mdi:logout',
      onClick: () => {
        emit('close', false)
        user.value = null
        token.value = null
      }
    }
  ]
  
  </script>
  
  <style scoped>
  
  </style>
    
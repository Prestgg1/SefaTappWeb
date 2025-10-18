<template>
  <header class="sticky top-0 z-50   bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
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
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">ŞefaTapp</h2>
        </NuxtLink>
      </div>

      <!-- Nav -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink to="/demo/doctors" class="nav-link">Həkimlər</NuxtLink>
        <NuxtLink to="/demo/reservation" class="nav-link">Rezervasiyalar</NuxtLink>
      </nav>
     
      <!-- Actions -->
      <div class="flex items-center gap-4">
        <DarkMode/>
        <NuxtLink to="/demo/notifications" class="icon-btn"><Icon name="mdi:bell-outline" /></NuxtLink>
        <NuxtLink to="/demo/favorites" class="icon-btn"><Icon name="mdi:heart-outline" /></NuxtLink>
        <div v-if="user" class="flex items-center gap-3">
          <img
            :src="user.image || '/default-avatar.png'"
            alt="Avatar"
            class="w-9 h-9 rounded-full object-cover"
          />
          <span class="font-medium text-gray-900 dark:text-white">{{ user.name }}</span>
        </div>

        <!-- Əgər user yoxdursa -->
        <template v-else>
          <UModal v-model:open="isOpenLogin">
            <UButton
              class="nav-link"
              label="Daxil Ol"
              color="neutral"
              variant="subtle"
            />
            <template #content>
              <LoginModal @close="() => (isOpenLogin = false)" />
            </template>
          </UModal>

          <UModal v-model:open="isOpen">
            <UButton
              class="nav-link"
              label="Qeydiyyatdan Keç"
              color="neutral"
              variant="subtle"
            />
            <template #content>
              <RegisterModal @close="() => (isOpen = false)" />
            </template>
          </UModal>
        </template>
   
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { User } from '~/utils/useApi';

const emit = defineEmits<{ close: [boolean] }>()
const isOpenLogin = ref(false)
const isOpen = ref(false)
const user = useState<User | null>("user", () => null)
</script>

<style scoped>

</style>
  
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
        <NuxtLink to="/demo" class="nav-link">Həkimlər</NuxtLink>
        <NuxtLink to="/reservation" class="nav-link">Rezervasiyalar</NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button class="icon-btn"><Icon name="mdi:bell-outline" /></button>
        <NuxtLink to="/demo/favorites" class="icon-btn"><Icon name="mdi:heart-outline" /></NuxtLink>
        <div class="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
        <UModal
         :close="{ onClick: () => emit('close', false) }"
        >
    <UButton class="nav-link" label="Daxil Ol" color="neutral" variant="subtle" />

    <template #content>
      <LoginModal :close="{ onClick: () => emit('close', false) }" />
    </template>
  </UModal>
  <UModal>
    <UButton class="nav-link" label="Qeydiyyatdan Keç" color="neutral" variant="subtle" />

    <template #content>
      <RegisterModal />
    </template>
  </UModal>
      </div>
    </div>

    <!-- Modallar -->

   
<!--     <LoginModal v-model="isOpenLogin" @close="isOpenLogin = false" />
    <RegisterModal v-model="isOpen" @close="isOpen = false" /> -->
  </header>
</template>

<script setup>

const isOpen = ref(false)
const isOpenLogin = ref(false)
</script>

<style scoped>

</style>
  
<template>
  <aside class="w-80 bg-card-light border-r border-border-light flex flex-col">
    <!-- Header -->
    <div class="p-4 border-b border-border-light flex items-center gap-3">
      <h2 class="text-xl font-bold text-gray-900">Mesajlar</h2>
    </div>

    <div class="grow overflow-y-auto">
      <!-- Search Bar -->
      <div class="p-4">
        <div class="relative mb-4">
          <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            v-model="search"
            placeholder="Axtarış..."
            class="w-full border border-border-light rounded-full py-2 pl-10 pr-4 text-sm text-gray-600 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <!-- Chat List -->
      <nav class="flex flex-col">
        <NuxtLink
          v-for="([id, chat]) in lists"
          :key="id"
          :to="`/application/chats/${id}`"
          class="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition-colors"
          :active-class="'bg-primary/10 dark:bg-primary/20 border-l-4 border-primary'"
        >
          <img
            :src="chat.other_user_image"
            :alt="chat.other_user_name"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div class="flex-1">
            <div class="flex justify-between items-center">
              <h3 class="font-semibold text-gray-900">{{ chat.other_user_name }}</h3>
              <span class="text-xs text-gray-500">{{ formatTime(chat.last_message_date) }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-1">{{ chat.last_message }}</p>
          </div>
        </NuxtLink>

        <!-- Empty State -->
        <p v-if="lists.length === 0" class="text-center text-gray-500 text-sm py-6">
          Heç bir mesaj tapılmadı.
        </p>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useMainStore } from '~/stores'

const search = ref('')
const chats = useMainStore().$state.sidebar_chats

// Convert Map to array and filter by search term
const lists = computed(() => {
  return Array.from(chats).filter(([_, chat]) =>
    chat.other_user_name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

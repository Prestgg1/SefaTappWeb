<template>
    <aside class="w-80 bg-card-light  border-r border-border-light  flex flex-col">
      <div class="p-4 border-b border-border-light  flex items-center gap-3">
        <h2 class="text-xl font-bold text-gray-900 ">Mesajlar</h2>
      </div>
  
      <div class="grow overflow-y-auto">
        <div class="p-4">
          <div class="relative mb-4">
            <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Axtarış..."
              class="w-full  border border-border-light rounded-full py-2 pl-10 pr-4 text-sm text-gray-600 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
  
        <nav class="flex flex-col">
          <NuxtLink
            :active-class="'bg-primary/10 dark:bg-primary/20 border-l-4 border-primary'"
            to="/application/reservations/0"
            class="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition-colors"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHbACFghDKiQqMYFhdgCIeNzJzmO8kEJA1eMmmKBRTFIf4Yse3wPekFR58fdW9j-BgypV22vZS8xpOn4nj_B-CRUcpbtNQWx07DwmzxO2ZHueEqANY4wqwHRsSEl6NI-78kFAnstU0U6JO6iu_J0sLN0_haeJ6JcbLVLa7Wxqyaq2ooHborY8pcuN6tlhzqUoW1sYvcFMLAKOl5yLWvTjyerq6HJCzNd5RFVRL_StZCSSplQ_miof4Sl9TaH9z698Lp9jIUqcsqz1"
              alt="Şəfatapp AI"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-bold text-gray-900 ">Şəfatapp AI</h3>
                <span class="text-xs text-gray-500 ">10:42</span>
              </div>
              <p class="text-sm text-primary mt-1">Sizə necə kömək edə bilərəm?</p>
            </div>
          </NuxtLink>
         
          <NuxtLink
            :active-class="'bg-primary/10 dark:bg-primary/20 border-l-4 border-primary'"
            v-for="chat in messages"
            :key="chat.chat_id"
            :to="`/application/reservations/${chat.chat_id}`"
            class="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition-colors"
          >
            <img
              :src="chat.other_user_image"
              :alt="chat.other_user_name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-gray-900 ">{{ chat.other_user_name }}</h3>
                <span class="text-xs text-gray-500 ">{{ chat.last_message_date }}</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">
                {{ chat.last_message }}
              </p>
            </div>
          </NuxtLink>
        </nav>
      </div>
    </aside>
  </template>

  <script setup lang="ts">
import { useMainStore } from '~/stores';

    const mainStore = useMainStore()
    const { messages } = mainStore
  
  </script>

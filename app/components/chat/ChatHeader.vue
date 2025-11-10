<template>
    <header class="flex items-center justify-between p-4 border-b border-border-light ">
      <div class="flex items-center gap-4">
        <img
          :src="other_user?.other_user_image"
          alt="Şəfatapp AI"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 class="text-lg font-bold text-gray-900">{{other_user?.other_user_name}} <!-- But it's not working --> </h2>
       <!--    <p class="text-sm text-green-500 flex items-center gap-1.5">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Aktivdir
          </p> -->
        </div>
      </div>
  
      <div class="flex items-center gap-2">
        <button class="p-2 rounded-full hover:bg-gray-100">
          <Icon name="mdi:dots-vertical" class="text-gray-600" />
        </button>
      </div>
    </header>
  </template>

  <script setup lang="ts">
import { useMainStore } from '~/stores';
const router = useRoute()
  const mainStore = useMainStore()
  const other_user = mainStore.sidebar_chats.get(1)
  console.log(other_user?.other_user_name)  /* it's works logging */

</script>

  
<template>
    <div class="flex flex-col flex-1  font-display text-gray-800 dark:text-gray-200">
      <div class="grow flex flex-1 overflow-hidden">
        <ChatSidebar />
        <div class="flex-1 flex flex-col">
          <ChatHeader />
            <ChatMessages />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import ChatSidebar from '@/components/chat/Sidebar.vue'
import ChatHeader from '@/components/chat/ChatHeader.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
definePageMeta({
    layout: 'main'
})
  

  </script>
  
<template>
  <div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
    <div class="flex-grow flex h-[calc(100vh-160px)] overflow-hidden">
      <!-- Sidebar -->
      <ChatSidebar />

      <!-- Chat Area -->
      <div class="flex-1 flex flex-col bg-white dark:bg-background-dark">
        <ChatHeader />
        <ChatMessages />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatSidebar from '~/components/chat/Sidebar.vue'
import ChatHeader from '~/components/chat/ChatHeader.vue'
import ChatMessages from '~/components/chat/ChatMessages.vue'
</script>

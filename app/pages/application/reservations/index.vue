<template>
    Hiii
    <ChatMessages />
  </template>
  
  <script setup lang="ts">
import ChatSidebar from '@/components/chat/Sidebar.vue'
import ChatHeader from '@/components/chat/ChatHeader.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import { useMainStore } from '~/stores'
definePageMeta({
    layout: 'chat',
})



  </script>
  
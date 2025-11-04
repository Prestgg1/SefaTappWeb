<template>
    User Page
    <ChatMessages />
  </template>
  
  <script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
definePageMeta({
    layout: 'chat',
})


  </script>
  
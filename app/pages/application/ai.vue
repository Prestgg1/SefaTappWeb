<template>
    <main class="grow container mx-auto px-4 sm:px-6 py-8 flex flex-col items-center justify-center">
      <div class="w-full max-w-2xl flex flex-col bg-white rounded-xl shadow-lg border border-gray-200">
        <!-- Chat Header -->
        <div class="p-4 border-b border-gray-200 flex items-center gap-4">
          <div class="relative">
            <Icon name="mdi:robot-outline" class="text-4xl text-primary" />
          </div>
          <div>
            <h2 class="text-lg font-bold text-gray-900">ŞəfaTapp AI Sağlamlıq Asistanı</h2>
            <p class="text-sm text-gray-500">Onlayn</p>
          </div>
        </div>
  
        <!-- Chat Messages -->
        <div class="grow p-6 overflow-y-auto space-y-6">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="flex items-start gap-3"
            :class="msg.sender_id === 0 ? '' : 'justify-end'"
          >
            <!-- AI message -->
            <template v-if="msg.sender_id === 0">
              <div class="bg-gray-100 p-2 rounded-full">
                <Icon name="mdi:robot-outline" class="text-primary text-lg" />
              </div>
              <div class="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                <p class="text-sm text-gray-800">{{ msg.message }}</p>
              </div>
            </template>
  
            <!-- User message -->
            <template v-else>
              <div class="bg-primary text-white rounded-lg rounded-tr-none p-3 max-w-xs md:max-w-md">
                <p class="text-sm">{{ msg.message }}</p>
              </div>
              <div class="bg-primary/20 p-2 rounded-full">
                <Icon name="mdi:account-outline" class="text-primary text-lg" />
              </div>
            </template>
          </div>
        </div>
  
        <!-- Chat Input -->
        <div class="p-4 border-t border-gray-200">
          <div class="relative">
            <input
              v-model="message"
              type="text"
              placeholder="Mesajınızı bura yazın..."
              class="w-full bg-gray-100 border-transparent rounded-full py-3 pl-5 pr-14 focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
              @keyup.enter="sendMessage"
            />
            <button
              class="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
              @click="sendMessage"
            >
              <Icon name="mdi:send" class="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  definePageMeta({
    layout: 'main'
  })
  
  // Reactive state
  const messages = ref<{ sender_id: number; message: string }[]>([])
  const message = ref('')
  
  // Simulate fetching chat history from backend
  onMounted(async () => {
    // Example: replace with your API call
  /*   const res = await $fetch('/api/chats')  */// Example endpoint
    messages.value = [
      {
        sender_id: 0,
        message:
          'Salam! Mən ŞefaTapp AI sağlamlıq asistanıyam. Sizə necə kömək edə bilərəm? Məsələn, “Başım ağrıyır” və ya “Bakıda kardioloq tap” kimi suallar verə bilərsiniz.'
      }
    ]
    
  })
  
  // Handle sending messages
  const sendMessage = async () => {
    if (!message.value.trim()) return
  
    // Add user message locally
    messages.value.push({ sender_id: 1, message: message.value })
  
    // Save user message
    await $fetch('/api/chats', {
      method: 'POST',
      body: { message: message.value }
    })
  
    // Simulate AI response (replace with backend WebSocket or API)
    setTimeout(() => {
      messages.value.push({
        sender_id: 0,
        message: 'Bu simptom haqqında daha ətraflı məlumat verə bilərsinizmi?'
      })
    }, 800)
  
    message.value = ''
  }
  </script>
  
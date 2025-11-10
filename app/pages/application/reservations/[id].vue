<template>
 <ChatHeader />

  <div class="flex flex-col p-6 space-y-6">
    <div class="space-y-6 max-h-[calc(100vh-310px)] overflow-y-auto ">  <!-- Don't use custom pixel   -->
    <ChatMessage
      v-for="message in messages"
      :key="message.id"
      :type="message.sender_id === user?.id ? 'outgoing' : 'incoming'"
      :avatar="message.sender_id === user?.id ? user?.image : chat.other_user_image"
      :message="message.message"
      :time="message.created_at"
    />
  
    </div>
  <ChatInput />
  </div>
</template>

<script setup lang="ts">
import ChatMessage from '@/components/chat/ChatMessage.vue'
import { onMounted, onUnmounted } from 'vue'
const route = useRoute()
const user = useState<User | null>('user', () => null)
const {socket,isConnected,messages:socket_messages,send} = inject<UseWebSocketReturn>('chatSocket')!
onMounted(() => {
  const handler = (event: MessageEvent) => {
    console.log(event)

  }

  socket.value?.addEventListener('message', handler)

  onUnmounted(() => {
    socket.value?.removeEventListener('message', handler)
  })
})

definePageMeta({
    layout: 'chat',
})

import { useMainStore } from '~/stores'
  const mainStore = useMainStore()
const chat = mainStore.sidebar_chats.get(Number(route.params.id))

  const messages = mainStore.$state.messages.get(Number(route.params.id))


</script>


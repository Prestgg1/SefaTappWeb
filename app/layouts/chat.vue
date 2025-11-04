<script setup lang="ts">
import { useMainStore } from '~/stores'

import ChatSidebar from '@/components/chat/Sidebar.vue'
import ChatHeader from '@/components/chat/ChatHeader.vue'
useHead({
  title: 'ŞefaTapp - Sağlam və Rahat',
  meta: [
    {
      name: 'description',
      content:
        'ŞefaTapp, həkimlərə problemsiz giriş, süni intellekt dəstəyi, canlı müayinələr, klinika rezervasiyaları və aptek məhsulları təklif edən vahid sağlamlıq yoldaşınızdır.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { property: 'og:title', content: 'ŞefaTapp - Sağlamlığınız, Sadələşdirilmiş' },
    {
      property: 'og:description',
      content: 'Həkimlərə problemsiz giriş, süni intellekt dəstəyi və daha çoxu. Sağlamlığınızı idarə edin.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'ŞefaTapp - Sağlamlığınız, Sadələşdirilmiş' },
    {
      name: 'twitter:description',
      content: 'Həkimlərə problemsiz giriş, süni intellekt dəstəyi və daha çoxu. Sağlamlığınızı idarə edin.',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap',
    },
  ],
})


const mainStore = useMainStore()
const isLoading = ref(true)
onMounted(() => {
  client.GET("/api/chats/").then(res => {
    console.log(res)
    isLoading.value = false
    mainStore.setMessages(res.data!)
    console.log(mainStore.messages)
  })    
})
const token = useCookie('token')

const { socket, messages, isConnected, send } = useWebSocket('ws://http://192.168.1.69:8000/ws/chats?token=' + token.value)


</script>

<template>

<div class="relative w-full  min-h-screen  flex flex-col bg-gray-50 transition-colors duration-300">
  <MainHeader />
  <div class="flex flex-col flex-1  font-display text-gray-800 dark:text-gray-200">
      <div class="grow flex flex-1 overflow-hidden">
        <ClientOnly>
        <USkeleton v-if="isLoading" />
        <ChatSidebar v-else />
        <div class="flex-1 flex flex-col">
          <USkeleton v-if="isLoading" />
          <template v-else>
            <ChatHeader />
            <slot/>
          </template>
        </div>
        </ClientOnly>
      </div>
    </div>
    </div>
    <Footer />
</template>
  

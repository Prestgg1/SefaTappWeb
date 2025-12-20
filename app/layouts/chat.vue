<script setup lang="ts">
import { useMainStore } from '~/stores'

import ChatSidebar from '@/components/chat/Sidebar.vue'
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
  client.GET("/chats").then(res => {
    console.log(res)
    isLoading.value = false
    res.data!.forEach((chat: Chats[number]) => {
      mainStore.addSidebarChat(chat)
      mainStore.addMessage(chat.chat_id, chat.messages)
    })
    console.log(mainStore.sidebar_chats)
    console.log(mainStore.messages)
  })
})
const token = useCookie('token')

const chatSocket = useWebSocket(
  'wss://bimonet.com/ws/chats?token=' + token.value
)


// ✅ Provide it to all child pages/components
provide<UseWebSocketReturn>('chatSocket', chatSocket)


</script>

<template>
  <div class="relative w-full min-h-screen flex flex-col bg-gray-50 transition-colors duration-300">
    <MainHeader />

    <!-- Main area -->
    <div class="flex-1 flex min-h-0 font-display text-gray-300">
      <ClientOnly>
        <div class="flex flex-1 overflow-hidden min-h-0">
          <USkeleton v-if="isLoading" />
          <ChatSidebar v-else />

          <!-- Chat content area -->
          <div class="flex-1 flex flex-col min-h-0">
            <USkeleton v-if="isLoading" />
            <template v-else>
              <slot />
            </template>
          </div>
        </div>
      </ClientOnly>
    </div>

    <Footer />
  </div>
</template>


<!--    <Footer /> -->

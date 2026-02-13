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

const config = useRuntimeConfig()
const mainStore = useMainStore()
const isLoading = ref(true)
onMounted(() => {
  client().GET("/chats").then(res => {
    console.log(res)
    isLoading.value = false
    res.data!.data.forEach((chat: Chats[number]) => {
      mainStore.addSidebarChat(chat)
      mainStore.addMessage(chat.chat_id, chat.messages)
   })

    console.log(mainStore.sidebar_chats)
    console.log(mainStore.messages)
  })
})


const { $echo } = useNuxtApp();

const user = useState<User | null>('user', () => null);

onMounted(() => {
  if (!user.value) {
    console.error('User not authenticated');
    return;
  }

  console.log('Attempting to subscribe to private channel...');
  
  $echo.join(`chat.1`)
    .listen('.message.sent', (e: any) => {
      mainStore.appendMessage(e.chat_id, {
        id: String(Date.now()),
        sender_id: e.sender_id,
        message: e.message,
        type: e.type,
        attachments: "",
        is_read: e.is_read,
        created_at: e.created_at,
      })
      console.log('✅ Private channel event received:', e);
    })
    .error((error: any) => {
      console.error('❌ Channel subscription error:', error);
    });
  
  // Connection events
  $echo.connector.pusher.connection.bind('connected', () => {
    console.log('✅ WebSocket connected');
  });
  
  $echo.connector.pusher.connection.bind('error', (err: any) => {
    console.error('❌ WebSocket connection error:', err);
  });
});

onUnmounted(() => {
  if (user.value?.id) {
    $echo.leave(`chat.1`);
  }
});


/* Burada neden se envden oxumur */
/* const chatSocket = useWebSocket(
  config.public.WEB_SOCKET_URL + '/chats?token=' + token.value
)


provide<UseWebSocketReturn>('chatSocket', chatSocket)
 */

/* ws://api.safatapp.com/ws */
</script>

<template>
  <div class="relative w-full min-h-screen flex flex-col bg-gray-50 transition-colors duration-300">
    <MainHeader />

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

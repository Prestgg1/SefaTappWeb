<template>
  <div class="w-full full-center p-2">
    <h1 class="text-black text-3xl font-bold">Bütün Rezervasiyalar</h1>
  </div>
</template>

<script setup lang="ts">
const { $echo } = useNuxtApp();

const user = useState<User | null>('user', () => null);

onMounted(() => {
  if (!user.value) {
    console.error('User not authenticated');
    return;
  }

  console.log('Attempting to subscribe to private channel...');
  
  $echo.private(`App.Models.User.${user.value?.id}`)
    .listen('.test', (e: any) => {
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
    $echo.leave(`private-App.Models.User.${user.value.id}`);
  }
});
import { useMainStore } from '~/stores'
const mainStore = useMainStore()
console.log(mainStore.$state.messages)
definePageMeta({
  layout: 'chat',
})



</script>
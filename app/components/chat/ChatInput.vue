<template>
    <form @submit.prevent="submitMessage" class="p-4 border-t border-border-light bg-card-light">
    <div class="flex items-center gap-4">
    
    <button class="w-12 h-12 full-center rounded-full hover:bg-gray-100 ">
    <Icon name="mdi:camera" class=" text-gray-600 dark:text-gray-300"/>
    </button>
    <input v-model="message" class="flex-1 text-black outline-none bg-background-light border 
    border-border-light rounded-full py-3 px-5
    text-sm focus:ring-primary 
    focus:border-primary" placeholder="Mesajınızı yazın..." type="text"/>
    <button   class="bg-primary text-white rounded-full w-12 h-12 full-center shrink-0 hover:bg-primary/90 transition-colors">
    <Icon name="mdi:send" class="text-gray-600 dark:text-gray-300"/>
    </button>
    </div>
    </form>
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    import { useMainStore } from '~/store'
    
    const message = ref<string>('')
    const user = useState<User | null>('user', () => null)
    const mainStore = useMainStore()
    const submitMessage = async () => {
      if (message.value && user.value) {
        mainStore.addAiMessage({
            id: Date.now(),
            message: message.value,
            sender_id: user.value.id,
            created_at: new Date().toISOString(),
        })
        const req = await client.POST("/api/chats/ai", {
            body:{
                question: message.value
            }
        })
        if (req.error) {
            console.log(req.error)
        } else {
            mainStore.addAiMessage({
                id: Date.now(),
                message: req.data.answer,
                sender_id: 0,
                created_at: new Date().toISOString(),
            })
        }
        message.value = ''
      }
    }
    
    </script>
    
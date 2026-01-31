<template>
    <form @submit.prevent="submitMessage" class="p-4 border-t border-border-light bg-card-light">
        <div class="flex items-center gap-4">

            <button class="w-12 h-12 full-center rounded-full hover:bg-gray-100 ">
                <Icon name="mdi:camera" class=" text-gray-600 dark:text-gray-300" />
            </button>
            <input v-model="message" class="flex-1 text-black outline-none bg-background-light border 
    border-border-light rounded-full py-3 px-5
    text-sm focus:ring-primary 
    focus:border-primary" placeholder="Mesajınızı yazın..." type="text" />
            <button
                class="bg-primary text-white rounded-full text-center w-12 h-12 full-center  hover:bg-primary/90 transition-colors">
                <Icon name="mdi:send" class="text-xl  text-gray-300" />
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useMainStore } from '~/stores'
/* import type { UseWebSocketReturn } from '~/composables/useWebSocket'
const socket = inject<UseWebSocketReturn>('chatSocket') */
const message = ref<string>('')
const user = useState<User | null>('user', () => null)
const router = useRoute()
const mainStore = useMainStore()
const id = ref<number>(Number(router.params.id))
const submitMessage = async () => {
    if (message.value && user.value) {
        mainStore.appendMessage(id.value,{
            id: String(Date.now()),
            message: message.value,
            sender_id: user.value.id,
            created_at: new Date().toISOString(),
        })
        const req = await client().POST("/chats/{chatId}",{
            params:{
               path:{
                chatId:id.value
               }
            },
            body:{
                message:message.value,
                type:"text",
            }
        })
        console.log(req)
        /*  socket?.send({
            "type": "message",
            "message": message.value,
            "message_type": "text",
            "chat_id": router.params.id
        })  */
        message.value = ''
    }
}

</script>
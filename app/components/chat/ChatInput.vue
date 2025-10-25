<template>
<form class="p-4 border-t border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
<div class="flex items-center gap-4">

<button class="w-12 h-12 full-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
<Icon name="mdi:camera" class=" text-gray-600 dark:text-gray-300"/>
</button>
<input v-model="message" class="flex-1 text-black outline-none bg-background-light dark:bg-background-dark border 
border-border-light dark:border-border-dark rounded-full py-3 px-5
text-sm focus:ring-primary 
focus:border-primary" placeholder="Mesajınızı yazın..." type="text"/>
<button class="bg-primary text-white rounded-full w-12 h-12 full-center flex-shrink-0 hover:bg-primary/90 transition-colors">
<Icon name="mdi:send" class="text-gray-600 dark:text-gray-300"/>
</button>
</div>
</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('')
 
const submitMessage = async () => {
  if (message.value) {
    const req = await useServer().POST("/api/chats/ai", {
        body:{
            question: message.value
        }
    })
    console.log(req)
    message.value = ''
  }
}

</script>

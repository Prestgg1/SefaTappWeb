import { defineStore } from 'pinia';
import type { AiChats } from '../utils/client';
export const useMainStore = defineStore('main', {
  state: () => ({
    ai_messages: [] as AiChats,
    messages: [] as Chats,
  }),
  actions: {
    setAiMessages(messages: AiChats) {
      this.ai_messages = messages
    },
    addAiMessage(message: AiChats[number]) {
      this.ai_messages.push(message)
    },
    clearAiMessages() {
      this.ai_messages = []
    },
    removeAiMessage(index: number) {
      this.ai_messages.splice(index, 1)
    },
    setMessages(messages: Chats) {
      this.messages = messages
    },
    addMessage(message: Chats[number]) {
      this.messages.push(message)
    },
    clearMessages() {
      this.messages = []
    },
    removeMessage(index: number) {
      this.messages.splice(index, 1)
    },
  },
})


export const useMainStore = defineStore('main', {
  state: () => ({
    ai_messages: [] as Chats,
  }),
  actions: {
    setAiMessages(messages: Chats) {
      this.ai_messages = messages
    },
    addAiMessage(message: Chats[number]) {
      this.ai_messages.push(message)
    },
    clearAiMessages() {
      this.ai_messages = []
    },
    removeAiMessage(index: number) {
      this.ai_messages.splice(index, 1)
    },
  },
})

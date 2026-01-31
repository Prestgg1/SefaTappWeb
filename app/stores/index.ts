import { defineStore } from 'pinia';
export const useMainStore = defineStore('main', {
  state: () => ({
    sidebar_chats: new Map(),
    messages: new Map(),
  }),
  actions: {
    addSidebarChat(message: Chats[number]) {
      this.sidebar_chats.set(message.chat_id, {
        other_user_id: message.other_user_id,
        other_user_name: message.other_user_name,
        other_user_image: message.other_user_photo,
        last_message: message.messages[message.messages.length - 1]?.message,
        last_message_date: message.messages[message.messages.length - 1]?.created_at,
        unread_count: 0,
      })
    },
    addMessage(id: number, message: Chats[number]['messages']) {
      // Set/replace the entire messages array for a chat
      this.messages.set(id, message)
    },
    appendMessage(id: number, message: Chats[number]['messages'][number]) {
      // Append a single message to the chat's message list
      const existing = this.messages.get(id) as Chats[number]['messages'] | undefined
      if (existing) {
        existing.push(message)
        this.messages.set(id, existing)
      } else {
        this.messages.set(id, [message] as Chats[number]['messages'])
      }
    },
    clearSidebarChats() {
      this.sidebar_chats.clear()
    },
    removeSidebarChat(index: number) {
      this.sidebar_chats.delete(index)
    },
  },
})
